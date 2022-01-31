import Asset = require('./Asset');

/**
 * A Bundle represents an output file, containing multiple assets. Bundles can have
 * child bundles, which are bundles that are loaded dynamically from this bundle.
 * Child bundles are also produced when importing an asset of a different type from
 * the bundle, e.g. importing a CSS file from JS.
 */
declare class Bundle {
  static createWithAsset(
    asset: Asset,
    parentBundle: unknown,
    options: unknown
  ): Bundle;
  constructor(
    type: unknown,
    name: unknown,
    parent: unknown,
    options?: Record<string, unknown>
  );
  type: unknown;

  name: unknown;

  parentBundle: unknown;

  entryAsset: Asset;

  assets: Set<Asset>;

  childBundles: Set<Bundle>;

  siblingBundles: Set<Bundle>;

  siblingBundlesMap: Map<unknown, Bundle>;

  offsets: Map<unknown, unknown>;

  totalSize: number;

  bundleTime: number;

  isolated: unknown;
  addAsset(asset: Asset): void;
  removeAsset(asset: Asset): void;
  addOffset(asset: Asset, line: unknown, column?: number): void;
  getOffset(asset: Asset): unknown;
  getSiblingBundle(type: unknown): unknown;
  createChildBundle(
    entryAsset: Asset,
    options?: Record<string, unknown>
  ): Bundle;
  createSiblingBundle(
    entryAsset: Asset,
    options?: Record<string, unknown>
  ): Bundle;
  get isEmpty(): boolean;
  getBundleNameMap(
    contentHash: unknown,
    hashes?: Map<unknown, unknown>
  ): Map<unknown, unknown>;
  getHashedBundleName(contentHash: unknown): string;
  package(
    bundler: unknown,
    oldHashes: unknown,
    newHashes?: Map<unknown, unknown>
  ): Promise<Map<unknown, unknown>>;
  // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
  _package(bundler: unknown): Promise<void>;
  // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
  _addDeps(asset: Asset, packager: unknown, included: unknown): Promise<void>;
  addAssetSize(asset: Asset, size: unknown): void;
  getParents(): Bundle[];
  findCommonAncestor(bundle: unknown): Bundle;
  getHash(): string;
}

export = Bundle;
