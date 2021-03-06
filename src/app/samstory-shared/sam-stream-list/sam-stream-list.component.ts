import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CCPagingResult} from '../../../libs/cool-library/libs/model/CCPagingResult';
import {SamRouteService} from '../service/sam-route.service';
import {SamImageService} from '../service/sam-image.service';
import {InfinityBase} from '../infinity-base';
import {StreamsView} from '../../model/streams-view';

export enum SamListType {
    samstory, stream
}

export interface SamListProperty {
    type: SamListType;
    samstoryId?: string;
    samstoryTitle?: string;
    image?: string;
    attachName?: string;
    title?: string;
    content?: string;
    content2?: string;
    addressId?: string;
    streamId?: string;
    writeDate?: string;
    open?: string;
    tags?: string;
    memberName?: string;
    nickName?: string;
    streamCnt?: string;
    subscribeCnt?: string;
}

@Component({
    selector: 'app-sam-stream-list',
    templateUrl: './sam-stream-list.component.html',
    styleUrls: ['./sam-stream-list.component.scss']
})
export class SamStreamListComponent extends InfinityBase implements OnInit {

    @Input()
    samListProperty: SamListProperty;
    @Output()
    clickStreamEvent = new EventEmitter();

    constructor(
        private samRouteService: SamRouteService,
        private samImageService: SamImageService
    ) {
        super();
    }

    ngOnInit(): void {
    }

    getHrefForStream(item) {
        return this.samRouteService.getStoryStreamUrl(item[this.samListProperty.addressId], item[this.samListProperty.streamId]);
    }

    imageErrorHandler($event) {
        this.samImageService.imageErrorHandler($event);
    }

    clickStream() {
        this.clickStreamEvent.emit();
    }

    existAttachByStream(stream: StreamsView) {
        return this.samImageService.existAttachByStream(stream);
    }

}
