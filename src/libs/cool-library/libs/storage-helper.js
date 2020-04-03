var StorageHelper = /** @class */ (function () {
    function StorageHelper() {
    }
    /**
     * 쿠키 저장
     * @param cname
     * @param cvalue
     * @param exdays
     */
    StorageHelper.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        // tslint:disable-next-line
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    };
    /**
     * 쿠키 저장 시간 기준
     * @param cname
     * @param cvalue
     * @param hour
     */
    StorageHelper.prototype.setCookieHour = function (cname, cvalue, hour) {
        var d = new Date();
        // tslint:disable-next-line
        d.setTime(d.getTime() + (hour * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    };
    /**
     * 쿠키가져온기
     * @param cname
     */
    StorageHelper.prototype.getCookie = function (cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        // tslint:disable-next-line
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    };
    /**
     * 세션 스토리지에 값 저장
     * @param sname  세션 스토리지에 저장할 이름
     * @param svalue 세션 스토리지에 저장할 값
     */
    StorageHelper.prototype.setSessionStorage = function (sname, svalue) {
        sessionStorage.setItem(sname, svalue);
    };
    /**
     * 세션 스토리지에서 값을 가져온다.
     * @param sname
     * @return string  이름에 해당하는 값을 반환
     */
    StorageHelper.prototype.getSessionStorage = function (sname) {
        return sessionStorage.getItem(sname);
    };
    /**
     * 원하는 아이템 삭제
     * @param sname
     */
    StorageHelper.prototype.removeItemSessionStorage = function (sname) {
        sessionStorage.removeItem(sname);
    };
    /**
     * 모두 삭제
     */
    StorageHelper.prototype.clearSessionStorage = function () {
        sessionStorage.clear();
    };
    return StorageHelper;
}());
export { StorageHelper };
//# sourceMappingURL=storage-helper.js.map