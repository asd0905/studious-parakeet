var DaumPostHelper = /** @class */ (function () {
    function DaumPostHelper() {
    }
    DaumPostHelper.prototype.postcode = function (otp) {
        return new daum.Postcode(otp).open();
    };
    return DaumPostHelper;
}());
export { DaumPostHelper };
//# sourceMappingURL=daum-post-helper.js.map