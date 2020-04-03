export declare const MEMBER_URL = "https://member.coolschool.co.kr";
export declare const DEV_MEMBER_URL = "https://dev-member.coolschool.co.kr";
export declare const LOCAL_MEMBER_URL = "https://local-member.coolschool.co.kr";
export declare const COOLSCHOOL_URL = "https://www.coolschool.co.kr";
export declare const DEV_COOLSCHOOL_URL = "https://dev.coolschool.co.kr";
export declare const LOCAL_COOLSCHOOL_URL = "https://local.coolschool.co.kr";
export declare const COOL_LOGIN_URL: string;
export declare const DEV_COOL_LOGIN_URL: string;
export declare const LOCAL_COOL_LOGIN_URL: string;
export declare const COOL_LOGIN_CALLBACK_URL: string;
export declare const COOL_LOGIN_CALLBACK_FOR_SAMSTORY_URL: string;
export declare const COOL_LOGIN_CALLBACK_FOR_EMOTICON_URL: string;
export declare const COOL_LOGIN_CHECK_URL: string;
export declare const DEV_COOL_LOGIN_CHECK_URL: string;
export declare const LOCAL_COOL_LOGIN_CHECK_URL: string;
export declare const COOL_LOGOUT_URL: string;
export declare const COOLSCHOOL_CALLBACK_URL = "https://www.coolschool.co.kr/callback";
export declare const DEV_COOLSCHOOL_CALLBACK_URL = "https://dev.coolschool.co.kr/callback";
export declare const LOCAL_COOLSCHOOL_CALLBACK_URL = "https://local.coolschool.co.kr/callback";
export declare const SEARCH_URL = "//search.coolschool.co.kr";
export declare const DEV_SEARCH_URL = "//dev-search.coolschool.co.kr";
export declare const LOCAL_SEARCH_URL = "//local-search.coolschool.co.kr";
export declare const enum Env {
    LOCAL = "local",
    DEV = "dev",
    PROD = "prod"
}
export declare const enum ServerName {
    COOLSCHOOL = "coolschool",
    MEMBER = "member",
    SEARCH = "search"
}
export declare const FN_LOGOUT_URL: (url: string) => string;
export declare const FN_LOGOUT_PROC_URL: (url: string) => string;
export interface LogoutOpts {
    isRestoreLocation: boolean;
    isLogoutProc: boolean;
    logoutProcUrl: string | undefined;
}
