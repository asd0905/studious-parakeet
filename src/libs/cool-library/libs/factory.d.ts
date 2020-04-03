import { DateHelper } from './date-helper';
import { FileHelper } from "./file-helper";
import { Login } from './login';
import { UrlHelper } from './url-helper';
export declare class Factory {
    static newInstanceLogin(): Login;
    static newInstanceUrlHelper(): UrlHelper;
    static newInstanceDateHelper(): DateHelper;
    static newInstanceFileHelper(): FileHelper;
}
