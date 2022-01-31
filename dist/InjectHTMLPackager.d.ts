import HTMLPackager from 'parcel-bundler/src/packagers/HTMLPackager.js';
export default class InjectHTMLPackager extends HTMLPackager {
    insertSiblingBundles(siblingBundles: unknown[], tree: unknown): void;
}
