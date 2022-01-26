import Resolver = require('parcel-bundler/src/Resolver');

/**
 * An Asset represents a file in the dependency tree. Assets can have multiple
 * parents that depend on it, and can be added to multiple output bundles.
 * The base Asset class doesn't do much by itself, but sets up an interface
 * for subclasses to implement.
 */
declare class Asset {
  constructor(name: unknown, options: unknown);
  id: unknown;

  name: unknown;

  basename: string;

  relativeName: string;

  options: unknown;

  encoding: string;

  type: string;

  hmrPageReload: boolean;

  processed: boolean;

  contents: unknown;

  ast: void;

  generated: unknown;

  hash: unknown;

  sourceMaps: unknown;

  parentDeps: Set<unknown>;

  dependencies: Map<unknown, unknown>;

  depAssets: Map<unknown, unknown>;

  parentBundle: unknown;

  bundles: Set<unknown>;

  cacheData: Record<string, unknown>;

  startTime: number;

  endTime: number;

  buildTime: number;

  bundledSize: number;

  resolver: Resolver;

  shouldInvalidate(): boolean;
  loadIfNeeded(): Promise<void>;
  parseIfNeeded(): Promise<void>;
  getDependencies(): Promise<void>;
  addDependency(name: unknown, opts: unknown): void;
  resolveDependency(
    url: unknown,
    from?: unknown
  ): {
    depName: unknown;
    resolved: unknown;
  };
  addURLDependency(url: unknown, from: unknown, opts: unknown): unknown;
  get package(): undefined;
  getPackage(): Promise<unknown>;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _package: unknown;
  getConfig(
    filenames: unknown,
    opts?: Record<string, unknown>
  ): Promise<unknown>;
  mightHaveDependencies(): boolean;
  load(): Promise<unknown>;
  parse(): void;
  collectDependencies(): void;
  pretransform(): Promise<void>;
  transform(): Promise<void>;
  generate(): Promise<{
    [x: string]: unknown;
  }>;
  process(): Promise<unknown>;
  postProcess(generated: unknown): Promise<unknown>;
  generateHash(): string;
  invalidate(): void;
  invalidateBundle(): void;
  generateBundleName(): string;
  replaceBundleNames(bundleNameMap: unknown): void;
  generateErrorMessage(err: unknown): unknown;
}

export = Asset;
