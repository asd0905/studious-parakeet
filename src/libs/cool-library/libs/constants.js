// @ts-ignore
/* tslint:disable */
if (typeof window == 'undefined') {
    global.window = { location: { host: {} } };
}
/* tslint:enable */
export var MEMBER_URL = 'https://member.coolschool.co.kr';
export var DEV_MEMBER_URL = 'https://dev-member.coolschool.co.kr';
export var LOCAL_MEMBER_URL = 'https://local-member.coolschool.co.kr';
export var COOLSCHOOL_URL = 'https://www.coolschool.co.kr';
export var DEV_COOLSCHOOL_URL = 'https://dev.coolschool.co.kr';
export var LOCAL_COOLSCHOOL_URL = 'https://local.coolschool.co.kr';
export var COOL_LOGIN_URL = MEMBER_URL + '/login';
export var DEV_COOL_LOGIN_URL = DEV_MEMBER_URL + '/login';
export var LOCAL_COOL_LOGIN_URL = LOCAL_MEMBER_URL + '/login';
export var COOL_LOGIN_CALLBACK_URL = window.location.protocol + '//' + window.location.host + '/callback';
export var COOL_LOGIN_CALLBACK_FOR_SAMSTORY_URL = window.location.protocol + '//' + window.location.host + '/login';
export var COOL_LOGIN_CALLBACK_FOR_EMOTICON_URL = window.location.protocol + '//' + window.location.host + '/login';
export var COOL_LOGIN_CHECK_URL = MEMBER_URL + "/loginCheck";
export var DEV_COOL_LOGIN_CHECK_URL = DEV_MEMBER_URL + "/loginCheck";
export var LOCAL_COOL_LOGIN_CHECK_URL = LOCAL_MEMBER_URL + "/loginCheck";
export var COOL_LOGOUT_URL = MEMBER_URL + "/logout";
export var COOLSCHOOL_CALLBACK_URL = 'https://www.coolschool.co.kr/callback';
export var DEV_COOLSCHOOL_CALLBACK_URL = 'https://dev.coolschool.co.kr/callback';
export var LOCAL_COOLSCHOOL_CALLBACK_URL = 'https://local.coolschool.co.kr/callback';
export var SEARCH_URL = '//search.coolschool.co.kr';
export var DEV_SEARCH_URL = '//dev-search.coolschool.co.kr';
export var LOCAL_SEARCH_URL = '//local-search.coolschool.co.kr';
export var FN_LOGOUT_URL = function (url) {
    return url + "/logout?client_id=:client_id";
};
export var FN_LOGOUT_PROC_URL = function (url) {
    return url + "/logoutProc";
};
//# sourceMappingURL=constants.js.map