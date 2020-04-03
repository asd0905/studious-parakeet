export declare class StorageHelper {
    /**
     * 쿠키 저장
     * @param cname
     * @param cvalue
     * @param exdays
     */
    setCookie(cname: string, cvalue: string, exdays: number): void;
    /**
     * 쿠키 저장 시간 기준
     * @param cname
     * @param cvalue
     * @param hour
     */
    setCookieHour(cname: string, cvalue: string, hour: number): void;
    /**
     * 쿠키가져온기
     * @param cname
     */
    getCookie(cname: string): string;
    /**
     * 세션 스토리지에 값 저장
     * @param sname  세션 스토리지에 저장할 이름
     * @param svalue 세션 스토리지에 저장할 값
     */
    setSessionStorage(sname: string, svalue: string): void;
    /**
     * 세션 스토리지에서 값을 가져온다.
     * @param sname
     * @return string  이름에 해당하는 값을 반환
     */
    getSessionStorage(sname: string): any;
    /**
     * 원하는 아이템 삭제
     * @param sname
     */
    removeItemSessionStorage(sname: string): void;
    /**
     * 모두 삭제
     */
    clearSessionStorage(): void;
}
