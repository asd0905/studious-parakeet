import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StreamDetail} from '../../model/stream-detail.model';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {StreamDetailService} from './service/stream-detail.service';


@Component({
    selector: 'app-stream-detail',
    templateUrl: './stream-detail.component.html',
    styleUrls: ['./stream-detail.component.scss']
})
export class StreamDetailComponent implements OnInit {

    streamDetail: StreamDetail = new StreamDetail();
    safeContents: SafeHtml;

    constructor(
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private streamDetailService: StreamDetailService
    ) {
        const resultStreamDetail = this.activatedRoute.snapshot.data.streamDetail;
        this.streamDetail = resultStreamDetail.data;
        this.safeContents = this.sanitizer.bypassSecurityTrustHtml(this.streamDetail.contents);
        this.streamDetailService.setWebMeta(this.streamDetail);
    }

    ngOnInit(): void {
    }

}
