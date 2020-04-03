import {Component, OnInit} from '@angular/core';
import {SamListProperty, SamListType} from '../../samstory-shared/sam-stream-list/sam-stream-list.component';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-stream-list',
    templateUrl: './stream-list.component.html',
    styleUrls: ['./stream-list.component.scss']
})
export class StreamListComponent implements OnInit {

    streams: any;

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
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        console.log(this.activatedRoute.snapshot);
        this.streams = this.activatedRoute.snapshot.data.streams;
    }

}
