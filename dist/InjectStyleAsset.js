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
    isInjectedStyle() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = yield this.getRootConfig([
                '.parcelinjectstylerc',
                '.parcelinjectstylerc.js',
                'parcelinjectstyle.config.js',
            ], {
                packageKey: 'parcelInjectStyle',
            });
            // eslint-disable-next-line no-underscore-dangle
            this._isInjectedStyle = config && !!(0, file_path_filter_1.default)(config)(this.name);
            // eslint-disable-next-line no-underscore-dangle
            return this._isInjectedStyle;
        });
    }
    isInjectedStyleSync() {
        // eslint-disable-next-line no-underscore-dangle
        return !!this._isInjectedStyle;
    }
    generate() {
        const _super = Object.create(null, {
            generate: { get: () => super.generate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.generate.call(this);
            const isInjectedStyle = yield this.isInjectedStyle();
            if (result && isInjectedStyle) {
                const cssResult = result.find((v) => v.type === 'css');
                const jsResult = result.find((v) => v.type === 'js');
                jsResult.value = `
        const css = ${JSON.stringify(cssResult.value)};
        const style = document.createElement("style");
        style.type = "text/css";
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      `;
                jsResult.map = cssResult.map;
                return [jsResult];
            }
            return result;
        });
    }
}
module.exports = InjectStyleAsset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5qZWN0U3R5bGVBc3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9JbmplY3RTdHlsZUFzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQSxrREFBMEI7QUFDMUIsb0ZBQXlFO0FBQ3pFLDZDQUE2QztBQUM3Qyx3RkFBNkQ7QUFtQjdELE1BQXFCLGdCQUFpQixTQUFRLHFCQUFRO0lBa0I5QyxjQUFjOztZQUNsQixnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLGdEQUFnRDtnQkFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQ2MsQ0FBQzthQUN0QztZQUVELGdEQUFnRDtZQUNoRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUNqQixTQUFtQixFQUNuQixPQUEwQixFQUFFOztZQUU1QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN2QyxPQUFPLElBQUEsZUFBSyxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztpQkFDeEM7YUFDRjtZQUVELDBCQUEwQjtZQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBRUssZUFBZTs7WUFDbkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUNyQztnQkFDRSxzQkFBc0I7Z0JBQ3RCLHlCQUF5QjtnQkFDekIsNkJBQTZCO2FBQzlCLEVBQ0Q7Z0JBQ0UsVUFBVSxFQUFFLG1CQUFtQjthQUNoQyxDQUNGLENBQUM7WUFFRixnREFBZ0Q7WUFDaEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBQSwwQkFBYyxFQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0RSxnREFBZ0Q7WUFDaEQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQztLQUFBO0lBRUQsbUJBQW1CO1FBQ2pCLGdEQUFnRDtRQUNoRCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVLLFFBQVE7Ozs7O1lBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFNLFFBQVEsV0FBRSxDQUFDO1lBQ3RDLE1BQU0sZUFBZSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRXJELElBQUksTUFBTSxJQUFJLGVBQWUsRUFBRTtnQkFDN0IsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztnQkFFN0QsUUFBUSxDQUFDLEtBQUssR0FBRztzQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Ozs7O09BSzlDLENBQUM7Z0JBQ0YsUUFBUSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO2dCQUU3QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkI7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FDRjtpQkE1Rm9CLGdCQUFnQiJ9