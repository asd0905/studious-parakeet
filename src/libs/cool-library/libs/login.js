import { __awaiter, __generator } from "tslib";
import { COOL_LOGIN_CALLBACK_FOR_EMOTICON_URL, COOL_LOGIN_CALLBACK_FOR_SAMSTORY_URL, COOL_LOGIN_CALLBACK_URL, COOL_LOGIN_CHECK_URL, COOL_LOGIN_URL, COOLSCHOOL_CALLBACK_URL, DEV_COOL_LOGIN_CHECK_URL, DEV_COOL_LOGIN_URL, DEV_COOLSCHOOL_CALLBACK_URL, FN_LOGOUT_PROC_URL, FN_LOGOUT_URL, LOCAL_COOL_LOGIN_CHECK_URL, LOCAL_COOL_LOGIN_URL, LOCAL_COOLSCHOOL_CALLBACK_URL, } from './constants';
import { EnvHelper } from "./env-helper";
import { StorageHelper } from "./storage-helper";
import { UrlHelper } from './url-helper';
var Login = /** @class */ (function () {
    function Login() {
        this.urlHelper = new UrlHelper();
        this.storageHelper = new StorageHelper();
        this.envHelper = new EnvHelper();
    }
    /**
     * 쿨스쿨 로그인 페이지로 이동
     * @param {string} clientId
     * @param {string} action (선택)
     * @param isDev 개발 URL 사용여부
     */
    Login.prototype.goDefaultCoolLogin = function (clientId, action, isDev) {
        if (clientId === void 0) { clientId = ''; }
        if (action === void 0) { action = ''; }
        if (isDev === void 0) { isDev = false; }
        var param = {
            client_id: clientId,
            redirect_uri: COOL_LOGIN_CALLBACK_URL,
            redirect_uri_next: window.location.href,
            do_action: action,
        };
        var loginURL = COOL_LOGIN_URL;
        if (typeof isDev === 'boolean') {
            if (isDev) {
                loginURL = DEV_COOL_LOGIN_URL;
            }
        }
        else {
            switch (isDev) {
                case 'prod': {
                    loginURL = COOL_LOGIN_URL;
                    break;
                }
                case 'dev': {
                    loginURL = DEV_COOL_LOGIN_URL;
                    break;
                }
                case 'local': {
                    loginURL = LOCAL_COOL_LOGIN_URL;
                    break;
                }
                default: {
                    loginURL = COOL_LOGIN_URL;
                    break;
                }
            }
        }
        var paramStr = $.param(param);
        if (param.redirect_uri_next.search('&') === -1 && action !== '') {
            paramStr = paramStr.replace('&do_action=', '?do_action=');
        }
        window.location.href = loginURL + "?" + paramStr;
    };
    /**
     * 샘스토리용 로그인 페이지로 이동
     * @param clientId
     * @param action
     * @param isDev
     */
    Login.prototype.goCoolLoginForSamstory = function (clientId, action, isDev) {
        if (clientId === void 0) { clientId = ''; }
        if (action === void 0) { action = ''; }
        if (isDev === void 0) { isDev = false; }
        var param = {
            client_id: clientId,
            redirect_uri: COOL_LOGIN_CALLBACK_FOR_SAMSTORY_URL,
            redirect_uri_next: window.location.href
        };
        if (action) {
            param.do_action = action;
        }
        var loginURL = COOL_LOGIN_URL;
        if (isDev) {
            loginURL = DEV_COOL_LOGIN_URL;
        }
        var paramStr = $.param(param);
        window.location.href = loginURL + "?" + paramStr;
    };
    /**
     * 샘스토리용 next url 지정하여 로그인 페이지 이동
     * @param clientId
     * @param action
     * @param nextUrl
     * @param isDev
     */
    Login.prototype.goCoolLoginNextUrlForSamstory = function (clientId, action, nextUrl, isDev) {
        if (clientId === void 0) { clientId = ''; }
        if (action === void 0) { action = ''; }
        if (isDev === void 0) { isDev = false; }
        var param = {
            client_id: clientId,
            redirect_uri: COOL_LOGIN_CALLBACK_FOR_SAMSTORY_URL,
            redirect_uri_next: nextUrl,
            do_action: action,
        };
        var loginURL = COOL_LOGIN_URL;
        if (isDev) {
            loginURL = DEV_COOL_LOGIN_URL;
        }
        var paramStr = $.param(param);
        if (param.redirect_uri_next.search('&') === -1 && action !== '') {
            paramStr = paramStr.replace('&do_action=', '?do_action=');
        }
        window.location.href = loginURL + "?" + paramStr;
    };
    /**
     * 이모티콘용 로그인 페이지로 이동
     * @param clientId
     * @param action
     * @param isDev
     */
    Login.prototype.goCoolLoginForEmoticon = function (clientId, action, isDev) {
        if (clientId === void 0) { clientId = ''; }
        if (action === void 0) { action = ''; }
        if (isDev === void 0) { isDev = false; }
        var param = {
            client_id: clientId,
            redirect_uri: COOL_LOGIN_CALLBACK_FOR_EMOTICON_URL,
            redirect_uri_next: window.location.href,
            do_action: action,
        };
        var loginURL = COOL_LOGIN_URL;
        if (isDev) {
            loginURL = DEV_COOL_LOGIN_URL;
        }
        var paramStr = $.param(param);
        if (param.redirect_uri_next.search('&') === -1 && action !== '') {
            paramStr = paramStr.replace('&do_action=', '?do_action=');
        }
        window.location.href = loginURL + "?" + paramStr;
    };
    /**
     * 이모티콘용 next url 지정하여 로그인 페이지 이동
     * @param clientId
     * @param action
     * @param nextUrl
     * @param isDev
     */
    Login.prototype.goCoolLoginNextUrlForEmoticon = function (clientId, action, nextUrl, isDev) {
        if (clientId === void 0) { clientId = ''; }
        if (action === void 0) { action = ''; }
        if (isDev === void 0) { isDev = false; }
        var param = {
            client_id: clientId,
            redirect_uri: COOL_LOGIN_CALLBACK_FOR_EMOTICON_URL,
            redirect_uri_next: nextUrl,
            do_action: action,
        };
        var loginURL = COOL_LOGIN_URL;
        if (isDev) {
            loginURL = DEV_COOL_LOGIN_URL;
        }
        var paramStr = $.param(param);
        if (param.redirect_uri_next.search('&') === -1 && action !== '') {
            paramStr = paramStr.replace('&do_action=', '?do_action=');
        }
        window.location.href = loginURL + "?" + paramStr;
    };
    /**
     * 프로필용 로그인 페이지로 이동
     * @param clientId
     * @param action
     * @param isDev
     */
    Login.prototype.goCoolLoginForProfile = function (clientId, action, isDev) {
        if (clientId === void 0) { clientId = ''; }
        if (action === void 0) { action = ''; }
        if (isDev === void 0) { isDev = false; }
        var loginURL = COOL_LOGIN_URL;
        var callbackURL = COOLSCHOOL_CALLBACK_URL;
        if (typeof isDev === 'boolean') {
            if (isDev) {
                loginURL = DEV_COOL_LOGIN_URL;
                callbackURL = DEV_COOLSCHOOL_CALLBACK_URL;
            }
        }
        else {
            switch (isDev) {
                case 'prod': {
                    loginURL = COOL_LOGIN_URL;
                    callbackURL = COOLSCHOOL_CALLBACK_URL;
                    break;
                }
                case 'dev': {
                    loginURL = DEV_COOL_LOGIN_URL;
                    callbackURL = DEV_COOLSCHOOL_CALLBACK_URL;
                    break;
                }
                case 'local': {
                    loginURL = LOCAL_COOL_LOGIN_URL;
                    callbackURL = LOCAL_COOLSCHOOL_CALLBACK_URL;
                    break;
                }
                default: {
                    loginURL = COOL_LOGIN_URL;
                    callbackURL = COOLSCHOOL_CALLBACK_URL;
                    break;
                }
            }
        }
        var param = {
            client_id: clientId,
            redirect_uri: callbackURL,
            redirect_uri_next: window.location.href,
            do_action: action,
        };
        var paramStr = $.param(param);
        window.location.href = loginURL + "?" + paramStr;
    };
    /**
     * 쿨스쿨 로그인 이후 redirect 처리
     */
    Login.prototype.coolLoginCallbackRedirect = function () {
        var redirectNext = this.urlHelper.getQueryParam('redirect_uri_next');
        var redirect = this.urlHelper.getQueryParam('redirect');
        if (redirect) {
            redirectNext = redirect;
        }
        var doAction = this.urlHelper.getQueryParam('do_action');
        if (redirectNext) {
            if (doAction) {
                if (redirectNext.indexOf('?') !== -1) {
                    location.href = redirectNext + '&do_action=' + doAction;
                }
                else {
                    location.href = redirectNext + '?do_action=' + doAction;
                }
            }
            else {
                location.href = redirectNext;
            }
        }
        else {
            location.href = '/';
        }
    };
    /**
     * 통합 계정 로그인 세션이 있는지 검사
     */
    Login.prototype.coolLoginCheck = function (isDev) {
        if (isDev === void 0) { isDev = false; }
        var loginCheckURL = COOL_LOGIN_CHECK_URL;
        if (typeof isDev === 'boolean') {
            if (isDev) {
                loginCheckURL = DEV_COOL_LOGIN_CHECK_URL;
            }
        }
        else {
            switch (isDev) {
                case 'prod': {
                    loginCheckURL = COOL_LOGIN_CHECK_URL;
                    break;
                }
                case 'dev': {
                    loginCheckURL = DEV_COOL_LOGIN_CHECK_URL;
                    break;
                }
                case 'local': {
                    loginCheckURL = LOCAL_COOL_LOGIN_CHECK_URL;
                    break;
                }
                default: {
                    loginCheckURL = COOL_LOGIN_CHECK_URL;
                    break;
                }
            }
        }
        return $.ajax({
            method: 'GET',
            dataType: 'jsonp',
            url: loginCheckURL
        });
    };
    /**
     * 통합 계정 로그인 세션이 있는지 검사
     */
    Login.prototype.cooLoginCheck = function (isDev) {
        if (isDev === void 0) { isDev = false; }
        return this.coolLoginCheck(isDev);
    };
    /**
     * 로그아웃 함수
     * @param clientId
     * @param env
     * @param logoutOpts
     */
    Login.prototype.logout = function (clientId, env, logoutOpts) {
        return __awaiter(this, void 0, void 0, function () {
            var logoutUrl, setting, settingResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logoutUrl = this.envHelper.getUrl(env, "member" /* MEMBER */, FN_LOGOUT_URL);
                        setting = {
                            url: logoutUrl.replace(':client_id', clientId),
                            type: 'GET',
                            contentType: "application/json",
                            dataType: "jsonp",
                        };
                        return [4 /*yield*/, $.ajax(setting)];
                    case 1:
                        settingResponse = _a.sent();
                        if (!(settingResponse.result === 'success')) return [3 /*break*/, 6];
                        this.storageHelper.setCookie('accessToken', '', -1);
                        this.storageHelper.setCookie('client_id', '', -1);
                        logoutOpts = logoutOpts || {};
                        if (!(logoutOpts.isLogoutProc === undefined || logoutOpts.isLogoutProc === true)) return [3 /*break*/, 5];
                        if (!!logoutOpts.logoutProcUrl) return [3 /*break*/, 3];
                        return [4 /*yield*/, $.get(FN_LOGOUT_PROC_URL("//" + window.location.host))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, $.get(FN_LOGOUT_PROC_URL("" + logoutOpts.logoutProcUrl))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        if (logoutOpts.isRestoreLocation === undefined || logoutOpts.isRestoreLocation === true) { // 로그아웃 후 있던 페이지에 머무를 것이냐 말것이냐
                            location.href = "//" + window.location.host + window.location.pathname;
                        }
                        return [2 /*return*/, true];
                    case 6: return [2 /*return*/, false];
                }
            });
        });
    };
    return Login;
}());
export { Login };
//# sourceMappingURL=login.js.map