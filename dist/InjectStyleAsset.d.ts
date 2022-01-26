import { PackageJson } from 'type-fest';
import { AnyFilter } from '@jsdevtools/file-path-filter';
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
export default class InjectStyleAsset extends CSSAsset {
    _rootPackage?: Promise<PackageJsonInjectStyle>;
    name: string;
    resolver: Resolver;
    options: AssetOptions;
    getConfig: (filenames: unknown, opts?: Record<string, unknown>) => Promise<AnyFilter>;
    getRootPackage(): Promise<PackageJsonInjectStyle>;
    getRootConfig(filenames: string[], opts?: RootConfigOptions): Promise<AnyFilter>;
    generate(): Promise<unknown>;
}
export {};
