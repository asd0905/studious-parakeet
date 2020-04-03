import { COOLSCHOOL_URL, DEV_COOLSCHOOL_URL, DEV_MEMBER_URL, DEV_SEARCH_URL, LOCAL_COOLSCHOOL_URL, LOCAL_MEMBER_URL, LOCAL_SEARCH_URL, MEMBER_URL, SEARCH_URL } from "./constants";
var EnvHelper = /** @class */ (function () {
    function EnvHelper() {
    }
    EnvHelper.prototype.getUrl = function (env, serverName, fnUrl) {
        var url = '';
        switch (env) {
            case "prod" /* PROD */:
                switch (serverName) {
                    case "member" /* MEMBER */:
                        url = MEMBER_URL;
                        break;
                    case "search" /* SEARCH */:
                        url = SEARCH_URL;
                        break;
                    case "coolschool" /* COOLSCHOOL */:
                        url = COOLSCHOOL_URL;
                        break;
                }
                break;
            case "dev" /* DEV */:
                switch (serverName) {
                    case "member" /* MEMBER */:
                        url = DEV_MEMBER_URL;
                        break;
                    case "search" /* SEARCH */:
                        url = DEV_SEARCH_URL;
                        break;
                    case "coolschool" /* COOLSCHOOL */:
                        url = DEV_COOLSCHOOL_URL;
                        break;
                }
                break;
            case "local" /* LOCAL */:
                switch (serverName) {
                    case "member" /* MEMBER */:
                        url = LOCAL_MEMBER_URL;
                        break;
                    case "search" /* SEARCH */:
                        url = LOCAL_SEARCH_URL;
                        break;
                    case "coolschool" /* COOLSCHOOL */:
                        url = LOCAL_COOLSCHOOL_URL;
                        break;
                }
                break;
        }
        if (fnUrl) {
            return fnUrl(url);
        }
        return url;
    };
    return EnvHelper;
}());
export { EnvHelper };
//# sourceMappingURL=env-helper.js.map