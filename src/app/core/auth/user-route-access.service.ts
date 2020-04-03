import {Injectable, Inject, PLATFORM_ID} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {isPlatformServer} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class UserRouteAccessService implements CanActivate {

    constructor(
        @Inject(PLATFORM_ID) private platform: any,
        private router: Router
    ) {
    }

    // tslint:disable-next-line:max-line-length
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const universal = route.data.universal;
        console.log('route.data', route);
        console.log('route.data', route.data);
        console.log('route.data.universal', route.data.universal);
        if (universal === undefined || !universal) {
            if (isPlatformServer(this.platform)) {
                return this.router.parseUrl('/empty');
            }
        }
        return true;
    }
}
