import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CCObjectResult} from '../../../../libs/cool-library/libs/model/CCObjectResult';
import {StreamDetail} from '../../../model/stream-detail.model';
import {
    FIND_STREAM_IMAGE_URL,
    IMAGE_SERVER_URL, ImageType,
    META_DEFAULT_DESCRIPTION,
    META_DEFAULT_IMAGE_URL,
    STREAM_DETAIL_URL,
    STREAM_META_URL
} from '../../../app.constants';
import {SamImageService} from '../../../samstory-shared/service/sam-image.service';
import {StreamMeta} from '../../../model/stream-meta.model';
import {SamRouteService} from '../../../samstory-shared/service/sam-route.service';
import {SamMetaService} from '../../../samstory-shared/service/sam-meta.service';

@Injectable({
    providedIn: 'root'
})
export class StreamDetailService {

    constructor(
        private httpClient: HttpClient,
        private samRouteService: SamRouteService,
        private samMetaService: SamMetaService,
        private samImageService: SamImageService
    ) {
    }

    loadStreamDetail(streamId: number) {
        return this.httpClient.get<CCObjectResult<StreamDetail>>(`${STREAM_DETAIL_URL}/${streamId}`).toPromise();
    }

    async setWebMeta(streamDetail: StreamDetail) {
        const streamMetaUrl = STREAM_META_URL.replace(':streamId', streamDetail.streamId.toString());
        const response = await this.httpClient.get<CCObjectResult<StreamMeta>>(streamMetaUrl).toPromise();
        let streamMeta = new StreamMeta();
        streamMeta.streamId = streamDetail.streamId;
        streamMeta.streamTitle = streamDetail.streamTitle;
        streamMeta.description = META_DEFAULT_IMAGE_URL;
        streamMeta.image = await this.findStreamImageUrl(streamDetail.streamId);
        streamMeta.url = this.samRouteService.getStoryStreamFullUrl(streamDetail.addressId, streamDetail.streamId);

        if (response.result && response.data !== null) {
            streamMeta = response.data;
        }
        this.samMetaService.setStreamDetailMeta(streamMeta);
    }

    async findStreamImageUrl(streamId: number) {
        const findStreamImageUrl = FIND_STREAM_IMAGE_URL.replace(':streamId', streamId.toString());
        const imageResponse = await this.httpClient.get<CCObjectResult<string>>(findStreamImageUrl).toPromise();
        if (imageResponse.result) {
            const imageServerUrl = IMAGE_SERVER_URL.replace('http:', '').replace('https:', '');
            if (imageResponse.data) {
                if (imageResponse.data.indexOf(imageServerUrl) === -1) {
                    return this.samImageService.replaceThumbByUrl(imageResponse.data, ImageType.FIT);
                } else {
                    return imageResponse.data;
                }
            }
        }
        return META_DEFAULT_IMAGE_URL;
    }
}
