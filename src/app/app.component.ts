import {Component} from '@angular/core';
import {UrlService} from './shared/services/url.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private urlService: UrlService
    ) {
        // 라우트 이벤트 구독
        urlService.subscribeRouterEvent();
    }
}

