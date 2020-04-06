import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {STREAMS_URL} from '../../app.constants';
import {CCPagingResult} from '../../../libs/cool-library/libs/model/CCPagingResult';
import {UrlService} from '../../shared/services/url.service';
import {StorageService} from '../../shared/services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class StreamsService {

    constructor(
        private httpClient: HttpClient,
        private urlService: UrlService,
        private storageService: StorageService
    ) {
    }

    async loadStreams(params: string = null) {
        let url = `${STREAMS_URL}`;
        if (params) {
            url += `?${params}`;
        }
        const streamPageMeta = this.popStreamResultPageMeta();
        if (streamPageMeta) {
            return streamPageMeta;
        }
        return this.httpClient.get<any>(url).toPromise();
    }

    settingResultData<T>(newResult: CCPagingResult<T>, targetResult: CCPagingResult<T>) {
        if (targetResult) {
            const data = targetResult.data.concat(newResult.data);
            targetResult = newResult;
            targetResult.data = data;
        } else {
            targetResult = newResult;
            targetResult.data = newResult.data;
        }
        return targetResult;
    }

    async loadStreamsByResult<T>(resultStreams: CCPagingResult<T>) {
        const param = this.urlService.makeParamString(resultStreams);
        const response = await this.loadStreams(param);
        return this.settingResultData(response, resultStreams);
    }

    /**
     * 현재 path 를 기준으로 현재 페이지정보 및 데이터 저장
     * @param data 데이터
     */
    storePageMeta(data: any) {
        const key = this.urlService.path(true);
        const navigationStartEvent = this.urlService.getNavigationStartEvent();
        this.storageService.setObjectSessionStorage(key, {
            pagingResult: data,
            currentScrollPosition: document.documentElement.scrollTop || document.body.scrollTop,
            targetUrl: navigationStartEvent ? navigationStartEvent.url : ''
        });
    }

    /**
     * 페이지 복구
     * 단, 스크롤만 복구
     * 그리고 meta 데이터 삭제
     */
    restoreScrollPageMeta() {
        const popStateEvent = this.urlService.getPopStateEvent(); // back location 으로 검사
        if (popStateEvent && popStateEvent.url) {
            const streamListPageMeta = this.storageService.getObjectSessionStorage(popStateEvent.url);
            if (streamListPageMeta) {
                window.scrollTo(0, streamListPageMeta.currentScrollPosition);
            }
        }
    }

    /**
     *  pageMeta 정보 삭제
     */
    pageMetaClear() {
        const navigationEndEvent = this.urlService.getNavigationEndEvent(); // 현재 페이지로 검사
        if (navigationEndEvent && navigationEndEvent.url) {
            this.storageService.removeItemSessionStorage(navigationEndEvent.url);
            this.urlService.popStateEventClear();
        }
    }

    /**
     *  저장된 stream result 가져온다
     *  pagingResult 만 삭제
     */
    private popStreamResultPageMeta() {
        let popStateEvent = this.urlService.getPopStateEvent(); // back location 으로 검사
        // back location 검사
        if (!popStateEvent || !popStateEvent.url) {
            return null;
        }
        const streamListPageMeta = this.storageService.getObjectSessionStorage(popStateEvent.url);
        const navigationEndEvent = this.urlService.getNavigationEndEvent();
        // meta 검사
        if (!streamListPageMeta) {
            return null;
        }
        // targetUrl 검사
        if (!streamListPageMeta.targetUrl
            || !navigationEndEvent || !navigationEndEvent.url) {
            return null;
        }
        // 클릭하여 들어왔던 url 들 같은지 검사
        // 이전 url(navigationEndEvent 라우트가 끝나기전) 과 targetUrl 비교
        if (streamListPageMeta.targetUrl !== navigationEndEvent.url) {
            this.pageMetaClear();
            return null;
        }
        // pagingResult 검사
        if (!streamListPageMeta.pagingResult) {
            return null;
        }
        const pagingResult = streamListPageMeta.pagingResult;
        delete streamListPageMeta.pagingResult;
        this.storageService.setObjectSessionStorage(popStateEvent.url, streamListPageMeta);
        popStateEvent = undefined;
        return pagingResult;
    }


}
