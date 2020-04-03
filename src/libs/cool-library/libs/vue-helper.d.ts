import { CoolVueCommonParams } from "./model/cool-vue-common-params";
export declare class VueHelper {
    private loginHelper;
    settingUserParams(userInfoUrl: string, params: CoolVueCommonParams, callback?: (p: CoolVueCommonParams) => void): Promise<CoolVueCommonParams>;
}
