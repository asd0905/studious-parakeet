/**
 * DateHelper
 *
 * moment 라이브러리에 의존함
 */
var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    /**
     * date 를 하루의 끝시간으로 설정
     * @param {string} dateStr
     * @returns {string}
     */
    DateHelper.prototype.setEndDateToISOString = function (dateStr) {
        var date = moment(dateStr);
        var h = 23;
        var m = 59;
        var s = 59;
        date.hour(h);
        date.minute(m);
        date.second(s);
        return date.toISOString();
    };
    return DateHelper;
}());
export { DateHelper };
//# sourceMappingURL=date-helper.js.map