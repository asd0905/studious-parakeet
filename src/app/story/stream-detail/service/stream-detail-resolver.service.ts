import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StreamDetailService} from './stream-detail.service';

@Injectable({
    providedIn: 'root'
})
export class StreamDetailResolverService implements Resolve<any> {

    constructor(
        private streamDetailService: StreamDetailService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        const samstoryAddress = route.params.samstoryAddress;
        const streamId = route.params.streamId;
        return this.streamDetailService.loadStreamDetail(streamId);
    }
}
