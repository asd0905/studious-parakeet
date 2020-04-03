import { Env, LogoutOpts } from './constants';
export declare class Login {
    private urlHelper;
    private storageHelper;
    private envHelper;
    /**
     * 쿨스쿨 로그인 페이지로 이동
     * @param {string} clientId
     * @param {string} action (선택)
     * @param isDev 개발 URL 사용여부
     */
    goDefaultCoolLogin(clientId?: string, action?: string, isDev?: boolean | 'prod' | 'dev' | 'local'): void;
    /**
     * 샘스토리용 로그인 페이지로 이동
     * @param clientId
     * @param action
     * @param isDev
     */
    goCoolLoginForSamstory(clientId?: string, action?: string, isDev?: boolean): void;
    /**
     * 샘스토리용 next url 지정하여 로그인 페이지 이동
     * @param clientId
     * @param action
     * @param nextUrl
     * @param isDev
     */
    goCoolLoginNextUrlForSamstory(clientId: string | undefined, action: string | undefined, nextUrl: string, isDev?: boolean): void;
    /**
     * 이모티콘용 로그인 페이지로 이동
     * @param clientId
     * @param action
     * @param isDev
     */
    goCoolLoginForEmoticon(clientId?: string, action?: string, isDev?: boolean): void;
    /**
     * 이모티콘용 next url 지정하여 로그인 페이지 이동
     * @param clientId
     * @param action
     * @param nextUrl
     * @param isDev
     */
    goCoolLoginNextUrlForEmoticon(clientId: string | undefined, action: string | undefined, nextUrl: string, isDev?: boolean): void;
    /**
     * 프로필용 로그인 페이지로 이동
     * @param clientId
     * @param action
     * @param isDev
     */
    goCoolLoginForProfile(clientId?: string, action?: string, isDev?: boolean | 'prod' | 'dev' | 'local'): void;
    /**
     * 쿨스쿨 로그인 이후 redirect 처리
     */
    coolLoginCallbackRedirect(): void;
    /**
     * 통합 계정 로그인 세션이 있는지 검사
     */
    coolLoginCheck(isDev?: boolean | 'prod' | 'dev' | 'local'): any;
    /**
     * 통합 계정 로그인 세션이 있는지 검사
     */
    cooLoginCheck(isDev?: boolean | 'prod' | 'dev' | 'local'): any;
    /**
     * 로그아웃 함수
     * @param clientId
     * @param env
     * @param logoutOpts
     */
    logout(clientId: string, env: Env, logoutOpts?: LogoutOpts | any): Promise<boolean>;
}
