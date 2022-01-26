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
const clone_1 = __importDefault(require("clone"));
const file_path_filter_1 = __importDefault(require("@jsdevtools/file-path-filter"));
// eslint-disable-next-line import/extensions
const CSSAsset_js_1 = __importDefault(require("parcel-bundler/src/assets/CSSAsset.js"));
class InjectStyleAsset extends CSSAsset_js_1.default {
    getRootPackage() {
        return __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line no-underscore-dangle
            if (!this._rootPackage) {
                // eslint-disable-next-line no-underscore-dangle
                this._rootPackage = this.resolver.findPackage(this.options.rootDir);
            }
            // eslint-disable-next-line no-underscore-dangle
            return this._rootPackage;
        });
    }
    getRootConfig(filenames, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (opts.packageKey) {
                const rootPkg = yield this.getRootPackage();
                if (rootPkg && rootPkg[opts.packageKey]) {
                    return (0, clone_1.default)(rootPkg[opts.packageKey]);
                }
            }
            // Resolve the config file
            return this.getConfig(filenames);
        });
    }
    generate() {
        const _super = Object.create(null, {
            generate: { get: () => super.generate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.generate.call(this);
            const config = yield this.getRootConfig([
                '.parcelinjectstylerc',
                '.parcelinjectstylerc.js',
                'parcelinjectstyle.config.js',
            ], {
                packageKey: 'parcelInjectStyle',
            });
            if (result && config && (0, file_path_filter_1.default)(config)(this.name)) {
                const cssResult = result.find((v) => v.type === 'css');
                const jsResult = result.find((v) => v.type === 'js');
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
        });
    }
}
module.exports = InjectStyleAsset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5qZWN0U3R5bGVBc3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9JbmplY3RTdHlsZUFzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQSxrREFBMEI7QUFDMUIsb0ZBQXlFO0FBQ3pFLDZDQUE2QztBQUM3Qyx3RkFBNkQ7QUFtQjdELE1BQXFCLGdCQUFpQixTQUFRLHFCQUFRO0lBZTlDLGNBQWM7O1lBQ2xCLGdEQUFnRDtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsZ0RBQWdEO2dCQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FDYyxDQUFDO2FBQ3RDO1lBRUQsZ0RBQWdEO1lBQ2hELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDO0tBQUE7SUFFSyxhQUFhLENBQ2pCLFNBQW1CLEVBQ25CLE9BQTBCLEVBQUU7O1lBRTVCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzVDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3ZDLE9BQU8sSUFBQSxlQUFLLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUN4QzthQUNGO1lBRUQsMEJBQTBCO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuQyxDQUFDO0tBQUE7SUFFSyxRQUFROzs7OztZQUNaLE1BQU0sTUFBTSxHQUFHLE1BQU0sT0FBTSxRQUFRLFdBQUUsQ0FBQztZQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQ3JDO2dCQUNFLHNCQUFzQjtnQkFDdEIseUJBQXlCO2dCQUN6Qiw2QkFBNkI7YUFDOUIsRUFDRDtnQkFDRSxVQUFVLEVBQUUsbUJBQW1CO2FBQ2hDLENBQ0YsQ0FBQztZQUVGLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFBLDBCQUFjLEVBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6RCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDO2dCQUMvRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUU3RCxRQUFRLENBQUMsS0FBSyxHQUFHO3NCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzs7Ozs7T0FLOUMsQ0FBQztnQkFFRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkI7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FDRjtpQkF6RW9CLGdCQUFnQiJ9