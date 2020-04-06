import {Component, OnInit} from '@angular/core';
import {SamListProperty, SamListType} from '../../samstory-shared/sam-stream-list/sam-stream-list.component';
import {ActivatedRoute} from '@angular/router';
import {CCPagingResult} from '../../../libs/cool-library/libs/model/CCPagingResult';
import {StreamsView} from '../../model/streams-view';
import {StreamsService} from '../../samstory-shared/service/streams.service';
import {UrlService} from '../../shared/services/url.service';

@Component({
    selector: 'app-stream-list',
    templateUrl: './stream-list.component.html',
    styleUrls: ['./stream-list.component.scss']
})
export class StreamListComponent implements OnInit {

    resultStreams: CCPagingResult<StreamsView>;

    samListProperty: SamListProperty = {
        type: SamListType.stream,
        title: 'streamTitle',
        content: 'contents',
        writeDate: 'writeData',
        samstoryTitle: 'samstoryTitle',
        open: 'bOpen',
        tags: 'tags',
        addressId: 'addressId',
        streamId: 'streamId',
        image: 'imageSrc'
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private streamsService: StreamsService,
        private urlService: UrlService
    ) {
    }

    ngOnInit(): void {
        console.log(this.activatedRoute.snapshot);
        // this.streams = this.activatedRoute.snapshot.data.streams;
        this.resultStreams = this.activatedRoute.snapshot.data.streams;
    }

    async onScrollDown() {
        this.resultStreams.currentPage++;
        this.resultStreams = await this.streamsService.loadStreamsByResult(this.resultStreams);
    }

    storePageMeta() {
        this.streamsService.storePageMeta(this.resultStreams);
    }

    restorePageMeta() {
        this.streamsService.restoreScrollPageMeta();
        this.streamsService.pageMetaClear();
    }

}
