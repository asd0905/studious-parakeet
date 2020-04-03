import { CCResult } from './CCResult';
export declare class CCObjectResult<T> extends CCResult {
    data: T;
    constructor(result: boolean, message: string, errorCode: number, data: T);
}
