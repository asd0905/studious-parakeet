import { CCListResult } from './CCListResult';
export declare class CCPagingResult<T> extends CCListResult<T> {
    totalCount: number;
    currentPage: number;
    offset: number;
    size: number;
    constructor(result?: boolean, message?: string, errorCode?: number, data?: Array<T>, totalCount?: number, currentPage?: number, offset?: number, size?: number);
}
