"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// eslint-disable-next-line import/extensions
const HTMLPackager_js_1 = __importDefault(require("parcel-bundler/src/packagers/HTMLPackager.js"));
class InjectHTMLPackager extends HTMLPackager_js_1.default {
    insertSiblingBundles(siblingBundles, tree) {
        const siblingBundlesFiltered = siblingBundles.filter(({ assets }) => Array.from(assets).some(({ injectedStyle }) => !injectedStyle));
        super.insertSiblingBundles(siblingBundlesFiltered, tree);
    }
}
module.exports = InjectHTMLPackager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5qZWN0SFRNTFBhY2thZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0luamVjdEhUTUxQYWNrYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkNBQTZDO0FBQzdDLG1HQUF3RTtBQUV4RSxNQUFxQixrQkFBbUIsU0FBUSx5QkFBWTtJQUMxRCxvQkFBb0IsQ0FBQyxjQUF5QixFQUFFLElBQWE7UUFDM0QsTUFBTSxzQkFBc0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQ2xFLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FDL0QsQ0FBQztRQUVGLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0Y7aUJBUm9CLGtCQUFrQiJ9