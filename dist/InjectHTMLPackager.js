"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// eslint-disable-next-line import/extensions
const HTMLPackager_js_1 = __importDefault(require("parcel-bundler/src/packagers/HTMLPackager.js"));
function isInjectStyleAsset(asset) {
    return typeof (asset === null || asset === void 0 ? void 0 : asset.isInjectedStyle) === 'function';
}
class InjectHTMLPackager extends HTMLPackager_js_1.default {
    addAsset(asset) {
        const _super = Object.create(null, {
            addAsset: { get: () => super.addAsset }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const siblingBundlesCSSAssets = Array.from(this.bundle.childBundles)
                .flatMap((bundle) => Array.from(bundle.siblingBundles))
                .filter((bundle) => bundle.type === 'css')
                .flatMap((bundle) => Array.from(bundle.assets));
            yield Promise.all(siblingBundlesCSSAssets
                .filter(isInjectStyleAsset)
                .map((cssAsset) => isInjectStyleAsset(cssAsset) ? cssAsset.isInjectedStyle() : null));
            yield _super.addAsset.call(this, asset);
        });
    }
    insertSiblingBundles(siblingBundles, tree) {
        const siblingBundlesFiltered = siblingBundles.filter(({ assets }) => Array.from(assets).some((asset) => !asset.isInjectedStyleSync || !asset.isInjectedStyleSync()));
        super.insertSiblingBundles(siblingBundlesFiltered, tree);
    }
}
module.exports = InjectHTMLPackager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5qZWN0SFRNTFBhY2thZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0luamVjdEhUTUxQYWNrYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTZDO0FBQzdDLG1HQUF3RTtBQUt4RSxTQUFTLGtCQUFrQixDQUFDLEtBQVU7SUFDcEMsT0FBTyxPQUFPLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLGVBQWUsQ0FBQSxLQUFLLFVBQVUsQ0FBQztBQUN0RCxDQUFDO0FBRUQsTUFBcUIsa0JBQW1CLFNBQVEseUJBQVk7SUFHcEQsUUFBUSxDQUFDLEtBQVk7Ozs7O1lBQ3pCLE1BQU0sdUJBQXVCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztpQkFDakUsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDdEQsTUFBTSxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztpQkFDakQsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRWxELE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDZix1QkFBdUI7aUJBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztpQkFDMUIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDaEIsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNqRSxDQUNKLENBQUM7WUFFRixNQUFNLE9BQU0sUUFBUSxZQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUVELG9CQUFvQixDQUFDLGNBQXlCLEVBQUUsSUFBYTtRQUMzRCxNQUFNLHNCQUFzQixHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FDbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3JCLENBQUMsS0FBdUIsRUFBRSxFQUFFLENBQzFCLENBQUMsS0FBSyxDQUFDLG1CQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQzdELENBQ0YsQ0FBQztRQUVGLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0Y7aUJBOUJvQixrQkFBa0IifQ==