// These constants are injected via webpack environment variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application

import {environment} from '../environments/environment';

export const INVALID_ID = -1;
export const CLIENT_ID = 'NjM2YzY5NjU2ZTc0NWY2OTY0M2E1MzQxNGQ1MzU0NGY1MjU5';
/* tslint:disable */
if (typeof navigator == 'undefined') {
    // @ts-ignore
    global.navigator = { userAgent : { indexOf: () => false}};
}
/* tslint:enable */
export const IS_MOBILE = navigator.userAgent.indexOf('Mobi') > -1;
export const DEFAULT_STREAM_SIZE = 16;
export const DEFAULT_MOBILE_STREAM_SIZE = 10;
/*******************************************************************************************************************************************
 * flag
 */
export const IMAGE_SERVER_FLAG = true;

/*******************************************************************************************************************************************
 * URL
 */
export const SAMSTORY_BACK_URL = environment.samstoryBackUrl;
export const SAMSTORY_URL = environment.samstoryUrl;
export const SERVER_API_URL = `${SAMSTORY_BACK_URL}/api`;
export const SEARCH_API_URL = `${environment.searchUrl}/api`;
export const IMAGE_SERVER_URL = 'http://dev-cache.coolschool.co.kr'; // todo: image 서버 완료되면 운영으로

export const STREAMS_URL = `${SEARCH_API_URL}/samstory/_search/fields`;
export const STREAM_DETAIL_URL = `${SERVER_API_URL}/v2/streams`; // 글 상세
export const STREAM_META_URL = `${SERVER_API_URL}/streams/streamMeta/:streamId`;
export const FIND_STREAM_IMAGE_URL = `${SERVER_API_URL}/v2/streams/:streamId/_image`;
export const AUTHENTICATE_BY_SORT_URL = `${SERVER_API_URL}/loginBySort`;

export const STREAM_IMAGE_VIEWER_URL = '/imgviewer/startownboard/attach/';
/*******************************************************************************************************************************************
 *  path context
 */
export const STREAM_PATH_CONTEXT = 'streams';
export const STREAM_MOBILE_PATH_CONTEXT = 'm/streams';
export const SAMSTORY_PATH_CONTEXT = 'story';

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

export enum ImageType {
    N = 'N', T = 'T', FIT = 'fit'
}

/*******************************************************************************************************************************************
 * string
 */
export const META_DEFAULT_DESCRIPTION = '교단일기, 수업자료, SW교육, 학급경영, 교육이슈!보통 선생님들의 특별한 이야기';
export const META_DEFAULT_IMAGE_URL = 'http://update.coolmessenger.com/_ImageServer/samstory/sns/sns1200x628_tiny.png';
