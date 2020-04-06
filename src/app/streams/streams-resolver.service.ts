import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {StreamsService} from '../samstory-shared/service/streams.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StreamsResolverService implements Resolve<any> {

    constructor(
        private streamsService: StreamsService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        const defaultStreamSize = route.data.defaultStreamSize;
        return this.streamsService.loadStreams(`size=${defaultStreamSize}`);
    }
}
