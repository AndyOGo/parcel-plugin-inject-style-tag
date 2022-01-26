"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var clone_1 = __importDefault(require("clone"));
var file_path_filter_1 = __importDefault(require("@jsdevtools/file-path-filter"));
// eslint-disable-next-line import/extensions
var CSSAsset_js_1 = __importDefault(require("parcel-bundler/src/assets/CSSAsset.js"));
var InjectStyleAsset = /** @class */ (function (_super) {
    __extends(InjectStyleAsset, _super);
    function InjectStyleAsset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InjectStyleAsset.prototype.getRootPackage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // eslint-disable-next-line no-underscore-dangle
                if (!this._rootPackage) {
                    // eslint-disable-next-line no-underscore-dangle
                    this._rootPackage = this.resolver.findPackage(this.options.rootDir);
                }
                // eslint-disable-next-line no-underscore-dangle
                return [2 /*return*/, this._rootPackage];
            });
        });
    };
    InjectStyleAsset.prototype.getRootConfig = function (filenames, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var rootPkg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!opts.packageKey) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getRootPackage()];
                    case 1:
                        rootPkg = _a.sent();
                        if (rootPkg && rootPkg[opts.packageKey]) {
                            return [2 /*return*/, (0, clone_1.default)(rootPkg[opts.packageKey])];
                        }
                        _a.label = 2;
                    case 2: 
                    // Resolve the config file
                    return [2 /*return*/, this.getRootConfig(filenames)];
                }
            });
        });
    };
    InjectStyleAsset.prototype.generate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, config, cssResult, jsResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.generate.call(this)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.getRootConfig([
                                '.parcelinjectstylerc',
                                '.parcelinjectstylerc.js',
                                'parcelinjectstyle.config.js',
                            ], {
                                packageKey: 'parcelInjectStyle',
                            })];
                    case 2:
                        config = _a.sent();
                        if (result && config && (0, file_path_filter_1.default)(config)(this.name)) {
                            cssResult = result.find(function (v) { return v.type === 'css'; });
                            jsResult = result.find(function (v) { return v.type === 'js'; });
                            jsResult.value = "\n        const css = ".concat(JSON.stringify(cssResult.value), ";\n        const style = document.createElement(\"style\");\n        style.type = \"text/css\";\n        style.appendChild(document.createTextNode(css));\n        document.head.appendChild(style);\n      ");
                            return [2 /*return*/, [jsResult]];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return InjectStyleAsset;
}(CSSAsset_js_1.default));
module.exports = InjectStyleAsset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5qZWN0U3R5bGVBc3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9JbmplY3RTdHlsZUFzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxnREFBMEI7QUFDMUIsa0ZBQXlFO0FBQ3pFLDZDQUE2QztBQUM3QyxzRkFBNkQ7QUFtQjdEO0lBQThDLG9DQUFRO0lBQXREOztJQW9FQSxDQUFDO0lBMURPLHlDQUFjLEdBQXBCOzs7Z0JBQ0UsZ0RBQWdEO2dCQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDdEIsZ0RBQWdEO29CQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FDYyxDQUFDO2lCQUN0QztnQkFFRCxnREFBZ0Q7Z0JBQ2hELHNCQUFPLElBQUksQ0FBQyxZQUFZLEVBQUM7OztLQUMxQjtJQUVLLHdDQUFhLEdBQW5CLFVBQ0UsU0FBbUIsRUFDbkIsSUFBNEI7UUFBNUIscUJBQUEsRUFBQSxTQUE0Qjs7Ozs7OzZCQUV4QixJQUFJLENBQUMsVUFBVSxFQUFmLHdCQUFlO3dCQUNELHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBQTs7d0JBQXJDLE9BQU8sR0FBRyxTQUEyQjt3QkFDM0MsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs0QkFDdkMsc0JBQU8sSUFBQSxlQUFLLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDO3lCQUN4Qzs7O29CQUdILDBCQUEwQjtvQkFDMUIsc0JBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBQzs7OztLQUN0QztJQUVLLG1DQUFRLEdBQWQ7Ozs7OzRCQUNpQixxQkFBTSxpQkFBTSxRQUFRLFdBQUUsRUFBQTs7d0JBQS9CLE1BQU0sR0FBRyxTQUFzQjt3QkFDdEIscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FDckM7Z0NBQ0Usc0JBQXNCO2dDQUN0Qix5QkFBeUI7Z0NBQ3pCLDZCQUE2Qjs2QkFDOUIsRUFDRDtnQ0FDRSxVQUFVLEVBQUUsbUJBQW1COzZCQUNoQyxDQUNGLEVBQUE7O3dCQVRLLE1BQU0sR0FBRyxTQVNkO3dCQUVELElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFBLDBCQUFjLEVBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNuRCxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFoQixDQUFnQixDQUFDLENBQUM7NEJBQ3pELFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWYsQ0FBZSxDQUFDLENBQUM7NEJBRTdELFFBQVEsQ0FBQyxLQUFLLEdBQUcsZ0NBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGlOQUs5QyxDQUFDOzRCQUVGLHNCQUFPLENBQUMsUUFBUSxDQUFDLEVBQUM7eUJBQ25CO3dCQUVELHNCQUFPLE1BQU0sRUFBQzs7OztLQUNmO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBcEVELENBQThDLHFCQUFRLEdBb0VyRDtpQkFwRW9CLGdCQUFnQiJ9