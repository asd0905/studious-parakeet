import { __extends } from "tslib";
import { CCListResult } from './CCListResult';
var CCPagingResult = /** @class */ (function (_super) {
    __extends(CCPagingResult, _super);
    function CCPagingResult(result, message, errorCode, data, totalCount, currentPage, offset, size) {
        if (result === void 0) { result = true; }
        if (message === void 0) { message = ''; }
        if (errorCode === void 0) { errorCode = -1; }
        if (data === void 0) { data = []; }
        if (totalCount === void 0) { totalCount = 0; }
        if (currentPage === void 0) { currentPage = 1; }
        if (offset === void 0) { offset = 0; }
        if (size === void 0) { size = 10; }
        var _this = _super.call(this, result, message, errorCode, data) || this;
        _this.totalCount = totalCount;
        _this.currentPage = currentPage;
        _this.offset = offset;
        _this.size = size;
        return _this;
    }
    return CCPagingResult;
}(CCListResult));
export { CCPagingResult };
//# sourceMappingURL=CCPagingResult.js.map