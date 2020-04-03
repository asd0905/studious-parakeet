import {environment} from '../environments/environment';

export const INVALID_ID = -1;
export const IMAGE_SERVER_FLAG = true;
export const CLIENT_ID = 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1MzQxNGQ1MzU0NGY1MjU5';

/*******************************************************************************************************************************************
 * URL
 */
export const SAMSTORY_BACK_URL = environment.samstoryBackUrl;
export const SAMSTORY_URL = environment.samstoryUrl;
export const SERVER_API_URL = `${SAMSTORY_BACK_URL}/api`;
export const SEARCH_API_URL = `${environment.searchUrl}/api`;
export const IMAGE_SERVER_URL = `http://cache.coolschool.co.kr`;

export const STREAMS_URL = `${SERVER_API_URL}/streams`;
export const STREAM_DETAIL_URL = `${SERVER_API_URL}/v2/streams`; // 글 상세보기
export const STREAM_META_URL = `${SERVER_API_URL}/streams/streamMeta/:streamId`;
export const FIND_STREAM_IMAGE_URL = `${SERVER_API_URL}/v2/streams/:streamId/_image`;

/*******************************************************************************************************************************************
 * path context
 */
export const STREAM_PATH_CONTEXT = `streams`;
export const SAMSTORY_PATH_CONTEXT = `story`;

/*******************************************************************************************************************************************
 * enum
 */
export enum StreamNoticeType {
    NORMAL = 0, NOTICE = 1, UNLIMITED_NOTICE = 2
}

export enum StreamMenuWriteType {
    NORMAL = 0, SUBSCRIBER = 1, MEMBER = 2
}

export enum StreamReservationType {
    CURRENT = 0, RESERVATION = 1
}

export enum ImageSize {
    ORIGINAL = 'original', COMPRESS = 'compress', FIT = 'fit', LARGE = 'large', MID = 'mid', SMALL = 'small', THUMBNAIL = 'thumbnail'
}

export enum ImageType {
    N = 'N', T = 'T', FIT = 'fit'
}

/*******************************************************************************************************************************************
 * string
 */
export const META_DEFAULT_DESCRIPTION = '교단일기, 수업자료, sw교육, 학급경영, 교육이슈! 보통 선생님들의 특별한 이야기';
export const META_DEFAULT_IMAGE_URL = 'http://update.coolmessenger.com/_ImageServer/samstory/sns/sns1200x628_tiny.png';
