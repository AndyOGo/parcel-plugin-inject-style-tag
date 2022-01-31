import ParcelBundler from 'parcel-bundler';

export default function (bundler: ParcelBundler) {
  bundler.addAssetType('css', require.resolve('./InjectStyleAsset'));

  bundler.addPackager('html', require.resolve('./InjectHTMLPackager'));
}
