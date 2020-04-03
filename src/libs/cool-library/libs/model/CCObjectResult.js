import { __extends } from "tslib";
import { CCResult } from './CCResult';
var CCObjectResult = /** @class */ (function (_super) {
    __extends(CCObjectResult, _super);
    function CCObjectResult(result, message, errorCode, data) {
        var _this = _super.call(this, result, message, errorCode) || this;
        _this.data = data;
        return _this;
    }
    return CCObjectResult;
}(CCResult));
export { CCObjectResult };
//# sourceMappingURL=CCObjectResult.js.map