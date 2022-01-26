import Asset = require('parcel-bundler/src/Asset');

declare class CSSAsset extends Asset {
  previousSourceMap: unknown;

  getCSSAst(): unknown;
  sourceMap: unknown;
}

export = CSSAsset;
