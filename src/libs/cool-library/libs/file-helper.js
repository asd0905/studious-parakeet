var FileHelper = /** @class */ (function () {
    function FileHelper() {
    }
    FileHelper.prototype.getExtension = function (fileName) {
        return fileName.split('.').pop();
    };
    return FileHelper;
}());
export { FileHelper };
//# sourceMappingURL=file-helper.js.map