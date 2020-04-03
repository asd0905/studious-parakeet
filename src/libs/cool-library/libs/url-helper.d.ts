export declare class UrlHelper {
    /**
     * location 의 param 을 가져온다
     * @param {string} key
     * @returns {string} value
     */
    getQueryParam(key: string): any;
    /**
     * location params 정보를 가져온다
     * @param {string} queryString
     * @returns {any} params
     */
    private getQueryParams;
    /**
     * 하나의 hash 를 가져온다
     * @param url
     */
    getHashSingleValue(url?: string): string;
}
