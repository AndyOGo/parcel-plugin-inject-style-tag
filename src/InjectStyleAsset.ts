// eslint-disable-next-line import/no-extraneous-dependencies
import { PackageJson } from 'type-fest';
import clone from 'clone';
import filePathFilter, { AnyFilter } from '@jsdevtools/file-path-filter';
// eslint-disable-next-line import/extensions
import CSSAsset from 'parcel-bundler/src/assets/CSSAsset.js';
import Resolver from '../types/Resolver';

export interface PackageJsonInjectStyle {
  parcelInjectStyleTag: AnyFilter;
}

export interface RootConfigOptions {
  packageKey?: 'parcelInjectStyle';
}

export interface AssetOptions {
  rootDir: string;
}

export interface Result {
  type: string;
}

export default class InjectStyleAsset extends CSSAsset {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _rootPackage?: Promise<PackageJson>;

  name: string;

  resolver: Resolver;

  options: AssetOptions;

  async getRootPackage(): Promise<PackageJson> {
    // eslint-disable-next-line no-underscore-dangle
    if (!this._rootPackage) {
      // eslint-disable-next-line no-underscore-dangle
      this._rootPackage = this.resolver.findPackage(
        this.options.rootDir
      ) as Promise<PackageJson>;
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
    return this.getRootConfig(filenames);
  }

  async generate(): Promise<unknown> {
    const result = await super.generate();
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

    if (result && config && filePathFilter(config)(this.name)) {
      const cssResult = result.find((v: Result) => v.type === 'css');
      const jsResult = result.find((v: Result) => v.type === 'js');

      jsResult.value = `
        const css = ${JSON.stringify(cssResult.value)};
        const style = document.createElement("style");
        style.type = "text/css";
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      `;

      return [jsResult];
    }

    return result;
  }
}
