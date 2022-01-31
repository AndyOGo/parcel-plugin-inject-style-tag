// eslint-disable-next-line import/extensions
import HTMLPackager from 'parcel-bundler/src/packagers/HTMLPackager.js';
import InjectStyleAsset from './InjectStyleAsset';
import Asset from '../types/Asset';
import Bundle from '../types/Bundle';

function isInjectStyleAsset(asset: any): asset is InjectStyleAsset {
  return typeof asset?.isInjectedStyle === 'function';
}

export default class InjectHTMLPackager extends HTMLPackager {
  bundle: Bundle;

  async addAsset(asset: Asset): Promise<void> {
    const siblingBundlesCSSAssets = Array.from(this.bundle.childBundles)
      .flatMap((bundle) => Array.from(bundle.siblingBundles))
      .filter((bundle: Bundle) => bundle.type === 'css')
      .flatMap((bundle) => Array.from(bundle.assets));

    await Promise.all(
      siblingBundlesCSSAssets
        .filter(isInjectStyleAsset)
        .map((cssAsset) =>
          isInjectStyleAsset(cssAsset) ? cssAsset.isInjectedStyle() : null
        )
    );

    await super.addAsset(asset);
  }

  insertSiblingBundles(siblingBundles: unknown[], tree: unknown): void {
    const siblingBundlesFiltered = siblingBundles.filter(({ assets }) =>
      Array.from(assets).some(
        (asset: InjectStyleAsset) =>
          !asset.isInjectedStyleSync || !asset.isInjectedStyleSync()
      )
    );

    super.insertSiblingBundles(siblingBundlesFiltered, tree);
  }
}
