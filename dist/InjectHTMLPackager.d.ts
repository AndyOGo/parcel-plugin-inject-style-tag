import HTMLPackager from 'parcel-bundler/src/packagers/HTMLPackager.js';
import Asset from '../types/Asset';
import Bundle from '../types/Bundle';
export default class InjectHTMLPackager extends HTMLPackager {
    bundle: Bundle;
    addAsset(asset: Asset): Promise<void>;
    insertSiblingBundles(siblingBundles: unknown[], tree: unknown): void;
}
