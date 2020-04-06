import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {STREAMS_URL} from '../../app.constants';
import {CCPagingResult} from '../../../libs/cool-library/libs/model/CCPagingResult';
import {UrlService} from '../../shared/services/url.service';

@Injectable({
    providedIn: 'root'
})
export class StreamsService {

    constructor(
        private httpClient: HttpClient,
        private urlService: UrlService
    ) {
    }

    async loadStreams(params: string = null) {
        let url = `${STREAMS_URL}`;
        if (params) {
            url += `?${params}`;
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
}
