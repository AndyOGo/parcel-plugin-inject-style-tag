/**
 * This resolver implements a modified version of the node_modules resolution algorithm:
 * https://nodejs.org/api/modules.html#modules_all_together
 *
 * In addition to the standard algorithm, Parcel supports:
 *   - All file extensions supported by Parcel.
 *   - Glob file paths
 *   - Absolute paths (e.g. /foo) resolved relative to the project root.
 *   - Tilde paths (e.g. ~/foo) resolved relative to the nearest module root in node_modules.
 *   - The package.json module, jsnext:main, and browser field as replacements for package.main.
 *   - The package.json browser and alias fields as an alias map within a local module.
 *   - The package.json alias field in the root package for global aliases across all modules.
 */
declare class Resolver {
  constructor(options?: Record<string, unknown>);
  options: Record<string, unknown>;

  cache: Map<unknown, unknown>;

  packageCache: Map<unknown, unknown>;

  rootPackage: unknown;
  resolve(input: unknown, parent: unknown): Promise<unknown>;
  resolveModule(
    filename: unknown,
    parent: unknown
  ): Promise<
    | {
        moduleName: string;
        subPath: string;
        moduleDir: string;
        filePath: string;
      }
    | {
        filePath: unknown;
        moduleName?: undefined;
        subPath?: undefined;
      }
    | {
        moduleName: string;
        subPath: string;
        filePath?: undefined;
      }
  >;
  getCacheKey(filename: unknown, parent: unknown): string;
  resolveFilename(filename: unknown, dir: unknown): unknown;
  loadRelative(filename: unknown, extensions: unknown): Promise<unknown>;
  findNodeModulePath(
    filename: unknown,
    dir: unknown
  ): Promise<
    | {
        moduleName: string;
        subPath: string;
        moduleDir: string;
        filePath: string;
      }
    | {
        filePath: unknown;
        moduleName?: undefined;
        subPath?: undefined;
        moduleDir?: undefined;
      }
  >;
  loadNodeModules(module: unknown, extensions: unknown): Promise<unknown>;
  isFile(file: unknown): Promise<unknown>;
  loadDirectory(dir: unknown, extensions: unknown, pkg: unknown): unknown;
  readPackage(dir: unknown): Promise<unknown>;
  getBrowserField(pkg: unknown): unknown;
  getPackageEntries(pkg: unknown): string[];
  loadAsFile(
    file: unknown,
    extensions: unknown,
    pkg: unknown
  ): Promise<{
    path: unknown;
    pkg: unknown;
  }>;
  expandFile(
    file: unknown,
    extensions: unknown,
    pkg: unknown,
    expandAliases?: boolean
  ): unknown;
  resolveAliases(filename: unknown, pkg: unknown): unknown;
  resolvePackageAliases(filename: unknown, pkg: unknown): unknown;
  getAlias(filename: unknown, dir: unknown, aliases: unknown): unknown;
  lookupAlias(aliases: unknown, filename: unknown, dir: unknown): unknown;
  findPackage(dir: unknown): Promise<unknown>;
  loadAlias(filename: unknown, dir: unknown): Promise<unknown>;
}

export = Resolver;
