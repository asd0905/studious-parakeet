import {AbstractNewStream} from './abstract-new-streams.model';

export class NewStream extends AbstractNewStream {
    streamId: number;
    samstoryId: number;
    samstoryTitle: string;
    subject: string;
    contents: string;
    attach: string;
    addressId: string;
    imageSrc: string;
}
