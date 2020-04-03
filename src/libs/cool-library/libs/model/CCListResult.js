import { __extends } from "tslib";
import { CCResult } from './CCResult';
var CCListResult = /** @class */ (function (_super) {
    __extends(CCListResult, _super);
    function CCListResult(result, message, errorCode, data) {
        var _this = _super.call(this, result, message, errorCode) || this;
        _this.data = data;
        return _this;
    }
    return CCListResult;
}(CCResult));
export { CCListResult };
//# sourceMappingURL=CCListResult.js.map