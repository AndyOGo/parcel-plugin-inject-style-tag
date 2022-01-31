// eslint-disable-next-line import/extensions
import HTMLPackager from 'parcel-bundler/src/packagers/HTMLPackager.js';

export default class InjectHTMLPackager extends HTMLPackager {
  insertSiblingBundles(siblingBundles: unknown[], tree: unknown): void {
    const siblingBundlesFiltered = siblingBundles.filter(({ assets }) =>
      Array.from(assets).some(({ injectedStyle }) => !injectedStyle)
    );

    super.insertSiblingBundles(siblingBundlesFiltered, tree);
  }
}
