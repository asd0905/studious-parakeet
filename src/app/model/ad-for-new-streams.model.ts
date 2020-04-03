import {AbstractNewStream} from './abstract-new-streams.model';

export class AdForNewStreams extends AbstractNewStream {
    startDate: string;
    endDate: string;
    advertiser: string;
    adText: string;
    imageUrl: string;
    showAdMark: boolean;
    landingUrl: string;
}
