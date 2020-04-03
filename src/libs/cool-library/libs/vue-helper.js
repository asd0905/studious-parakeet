import { __awaiter, __generator } from "tslib";
import { Login } from './login';
var VueHelper = /** @class */ (function () {
    function VueHelper() {
        this.loginHelper = new Login();
    }
    VueHelper.prototype.settingUserParams = function (userInfoUrl, params, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var isIe, settings, userInfoResp, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isIe = false || !!document.documentMode;
                        if (isIe) {
                            $.ajaxSetup({ cache: false });
                        }
                        if (params && params.isNeedLogin) {
                            this.loginHelper.coolLoginCheck(params.envName).then(function (result) {
                                if (!result || !result.coolid) {
                                    _this.loginHelper.goDefaultCoolLogin(params.clientId, '', params.envName);
                                }
                            });
                        }
                        settings = {
                            url: userInfoUrl
                        };
                        userInfoResp = {};
                        if (!!params.user) return [3 /*break*/, 3];
                        if (!params.authorization) return [3 /*break*/, 2];
                        settings.headers = {
                            Authorization: params.authorization,
                            ClientId: params.clientId
                        };
                        return [4 /*yield*/, $.ajax(settings)];
                    case 1:
                        userInfoResp = _a.sent();
                        params.isAuth = userInfoResp.result;
                        params.user = userInfoResp.result ? userInfoResp.data : {};
                        return [3 /*break*/, 3];
                    case 2:
                        params.isAuth = false;
                        params.user = {};
                        _a.label = 3;
                    case 3:
                        if (!(params && params.isNeedLogin)) return [3 /*break*/, 5];
                        if (!!params.isAuth) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.loginHelper.logout(params.clientId, params.envName)];
                    case 4:
                        result = _a.sent();
                        if (result) {
                            this.loginHelper.goDefaultCoolLogin(params.clientId, '', params.envName);
                        }
                        _a.label = 5;
                    case 5:
                        if (callback) {
                            callback(params);
                        }
                        return [2 /*return*/, params];
                }
            });
        });
    };
    return VueHelper;
}());
export { VueHelper };
//# sourceMappingURL=vue-helper.js.map