import {AbstractBanner} from './abstract-banner';
import { SafeHtml } from '@angular/platform-browser';

export class MainBanner extends AbstractBanner {
    advertiser: string;
    topText: string;
    bottomText: string;
    showAdMark: boolean;
    keywords: Array<string>;
    textHtml: SafeHtml;
}
