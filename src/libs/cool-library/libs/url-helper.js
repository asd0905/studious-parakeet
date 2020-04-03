var UrlHelper = /** @class */ (function () {
    function UrlHelper() {
    }
    /**
     * location 의 param 을 가져온다
     * @param {string} key
     * @returns {string} value
     */
    UrlHelper.prototype.getQueryParam = function (key) {
        return this.getQueryParams()[key] || '';
    };
    /**
     * location params 정보를 가져온다
     * @param {string} queryString
     * @returns {any} params
     */
    UrlHelper.prototype.getQueryParams = function (queryString) {
        if (queryString === void 0) { queryString = ''; }
        var qs = queryString;
        qs = qs || document.location.href.split('?')[1] || document.location.search;
        qs = qs.split('+').join(' ');
        var params = {};
        var tokens;
        var re = /[?&]?([^=]+)=([^&]*)/g;
        var sec = 2;
        // noinspection TsLint
        // tslint:disable-next-line
        while ((tokens = re.exec(qs))) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[sec]);
        }
        return params;
    };
    /**
     * 하나의 hash 를 가져온다
     * @param url
     */
    UrlHelper.prototype.getHashSingleValue = function (url) {
        var urlStr;
        urlStr = url || document.location.href;
        var hash = urlStr.indexOf('#');
        if (hash === -1) {
            return '';
        }
        return urlStr.substring(hash);
    };
    return UrlHelper;
}());
export { UrlHelper };
//# sourceMappingURL=url-helper.js.map