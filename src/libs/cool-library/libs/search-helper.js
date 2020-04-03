import { DEV_SEARCH_URL, LOCAL_SEARCH_URL, SEARCH_URL } from './constants';
var SearchHelper = /** @class */ (function () {
    function SearchHelper() {
    }
    /**
     * 페이지 조회 정보를 저장하는 함수
     * @param serviceType
     * @param streamId
     * @param coolIdx
     * @param env
     */
    SearchHelper.prototype.coolPageViewForStream = function (serviceType, subServiceType, streamId, coolIdx, env) {
        if (env === void 0) { env = 'prod'; }
        if (serviceType || streamId) {
            var coolPageViewForStreamUrl = '/api/coolPageView/indexing';
            switch (env) {
                case 'local':
                    coolPageViewForStreamUrl = LOCAL_SEARCH_URL + coolPageViewForStreamUrl;
                    break;
                case 'dev':
                    coolPageViewForStreamUrl = DEV_SEARCH_URL + coolPageViewForStreamUrl;
                    break;
                case 'prod':
                default:
                    coolPageViewForStreamUrl = SEARCH_URL + coolPageViewForStreamUrl;
                    break;
            }
            var settingsData = {
                "serviceType": serviceType,
                "subServiceType": subServiceType,
                "serviceSeq": streamId,
                "url": window.location.href
            };
            if (coolIdx) {
                settingsData.coolIdx = coolIdx;
            }
            var settings = {
                url: coolPageViewForStreamUrl,
                type: 'POST',
                contentType: "application/json",
                dataType: 'json',
                data: JSON.stringify(settingsData)
            };
            $.ajax(settings);
        }
    };
    return SearchHelper;
}());
export { SearchHelper };
//# sourceMappingURL=search-helper.js.map