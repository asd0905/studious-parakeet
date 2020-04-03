import {Injectable, isDevMode} from '@angular/core';
import {SAMSTORY_URL, SAMSTORY_PATH_CONTEXT, STREAM_PATH_CONTEXT} from '../../app.constants';

@Injectable({
    providedIn: 'root'
})
export class SamRouteService {

    constructor() {
    }

    getStoryStreamUrl(addressId: string, streamId: number) {
        return `/${SAMSTORY_PATH_CONTEXT}/${addressId}/${STREAM_PATH_CONTEXT}/${streamId}`;
    }

    getStoryStreamFullUrl(addressId: string, streamId: number) {
        const url = this.getStoryStreamUrl(addressId, streamId);
        return `${SAMSTORY_URL}${url}`;
    }
}
