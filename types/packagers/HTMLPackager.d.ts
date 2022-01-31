import Packager = require('parcel-bundler/src/packagers/Packager');

declare class HTMLPackager extends Packager {
  addBundlesToTree(bundles: unknown, tree: unknown): void;
  insertSiblingBundles(siblingBundles: unknown, tree: unknown): void;
}

export = HTMLPackager;
