import { CCResult } from './CCResult';
export declare class CCListResult<T> extends CCResult {
    data: Array<T>;
    constructor(result: boolean, message: string, errorCode: number, data: Array<T>);
}
