import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {STREAMS_URL} from '../../app.constants';

@Injectable({
    providedIn: 'root'
})
export class StreamsService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    async loadStreams() {
        const url = `${STREAMS_URL}?serviceType=edulub`;
        return this.httpClient.get<any>(url).toPromise();
    }
}
