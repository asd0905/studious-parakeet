import { Env, ServerName } from "./constants";
export declare class EnvHelper {
    getUrl(env: Env, serverName: ServerName, fnUrl?: (url: string) => string): string;
}
