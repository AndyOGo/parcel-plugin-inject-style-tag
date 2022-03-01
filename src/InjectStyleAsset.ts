// eslint-disable-next-line import/no-extraneous-dependencies
import { PackageJson } from 'type-fest';
import clone from 'clone';
import filePathFilter, { AnyFilter } from '@jsdevtools/file-path-filter';
// eslint-disable-next-line import/extensions
import CSSAsset from 'parcel-bundler/src/assets/CSSAsset.js';
import Resolver from '../types/Resolver';

interface PackageJsonInjectStyle extends PackageJson {
  parcelInjectStyle?: AnyFilter;
}

interface RootConfigOptions {
  packageKey?: 'parcelInjectStyle';
}

interface AssetOptions {
  rootDir: string;
}

interface Result {
  type: string;
}

export default class InjectStyleAsset extends CSSAsset {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _rootPackage?: Promise<PackageJsonInjectStyle>;

  name: string;

  resolver: Resolver;

  options: AssetOptions;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  _isInjectedStyle?: boolean;

  getConfig: (
    filenames: unknown,
    opts?: Record<string, unknown>
  ) => Promise<AnyFilter>;

  async getRootPackage(): Promise<PackageJsonInjectStyle> {
    // eslint-disable-next-line no-underscore-dangle
    if (!this._rootPackage) {
      // eslint-disable-next-line no-underscore-dangle
      this._rootPackage = this.resolver.findPackage(
        this.options.rootDir
      ) as Promise<PackageJsonInjectStyle>;
    }

    // eslint-disable-next-line no-underscore-dangle
    return this._rootPackage;
  }

  async getRootConfig(
    filenames: string[],
    opts: RootConfigOptions = {}
  ): Promise<AnyFilter> {
    if (opts.packageKey) {
      const rootPkg = await this.getRootPackage();
      if (rootPkg && rootPkg[opts.packageKey]) {
        return clone(rootPkg[opts.packageKey]);
      }
    }

    // Resolve the config file
    return this.getConfig(filenames);
  }

  async isInjectedStyle(): Promise<boolean> {
    const config = await this.getRootConfig(
      [
        '.parcelinjectstylerc',
        '.parcelinjectstylerc.js',
        'parcelinjectstyle.config.js',
      ],
      {
        packageKey: 'parcelInjectStyle',
      }
    );

    // eslint-disable-next-line no-underscore-dangle
    this._isInjectedStyle = config && !!filePathFilter(config)(this.name);

    // eslint-disable-next-line no-underscore-dangle
    return this._isInjectedStyle;
  }

  isInjectedStyleSync(): boolean {
    // eslint-disable-next-line no-underscore-dangle
    return !!this._isInjectedStyle;
  }

  async generate(): Promise<unknown> {
    const result = await super.generate();
    const isInjectedStyle = await this.isInjectedStyle();

    if (result && isInjectedStyle) {
      const cssResult = result.find((v: Result) => v.type === 'css');
      const jsResult = result.find((v: Result) => v.type === 'js');

      jsResult.value = `
        ${jsResult.value ? jsResult.value : ''}
        const css = ${JSON.stringify(cssResult.value)};
        const style = document.createElement("style");
        style.type = "text/css";
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      `;

      cssResult.value = '';

      return [jsResult, cssResult];
    }

    return result;
  }
}
