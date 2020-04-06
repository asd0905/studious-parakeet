import {Injectable} from '@angular/core';
import {CCPagingResult} from '../../libs/cool-library/libs/model/CCPagingResult';
import {Location} from '@angular/common';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UrlService {

    private popStateEvent;
    private navigationStartEvent;
    private navigationEndEvent;

    constructor(
        private location: Location,
        private router: Router
    ) {
    }

    subscribeRouterEvent() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationStart)
        ).subscribe((event) => {
            this.navigationStartEvent = event;
        });
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event) => {
            this.navigationEndEvent = event;
        });
        this.location.subscribe(value => {
            this.popStateEvent = value;
        });
    }

    getPopStateEvent() {
        return this.popStateEvent;
    }

    popStateEventClear() {
        this.popStateEvent = undefined;
    }

    getNavigationStartEvent() {
        return this.navigationStartEvent;
    }

    getNavigationEndEvent() {
        return this.navigationEndEvent;
    }

    private add(key, valueOrFunction, s) {
        // If value is a function, invoke it and use its return value
        const value = typeof valueOrFunction === 'function' ?
            valueOrFunction() :
            valueOrFunction;
        s[s.length] = encodeURIComponent(key) + '=' +
            encodeURIComponent(value == null ? '' : value);
    }

    private buildParams(prefix, obj, traditional, s) {
        let name;
        const rbracket = /\[\]$/;

        if (Array.isArray(obj)) {
            for (const [i, v] of obj) {
                if (traditional || rbracket.test(prefix)) {
                    // Treat each array item as a scalar.
                    this.add(prefix, v, s);
                } else {
                    // Item is non-scalar (array or object), encode its numeric index.
                    this.buildParams(
                        prefix + '[' + (typeof v === 'object' && v != null ? i : '') + ']',
                        v,
                        traditional,
                        s
                    );
                }
            }
        } else if (!traditional && this.toType(obj) === 'object') {
            // Serialize object item.
            // tslint:disable-next-line:forin
            for (name in obj) {
                this.buildParams(prefix + '[' + name + ']', obj[name], traditional, s);
            }
        } else {
            // Serialize scalar item.
            this.add(prefix, obj, s);
        }
    }

    private toType(obj) {
        if (obj == null) {
            return obj + '';
        }
        return typeof obj === 'object' ? {}[toString.call(obj)] || 'object' : typeof obj;
    }

    /**
     * jquery param 옮김, array 는 아직 테스트 안함
     * @param a key/values into a query string
     * @param traditional traditional
     */
    param(a, traditional = null) {
        let prefix;
        const s = [];

        if (a == null) {
            return '';
        }

        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
            // Serialize the form elements
            for (const [i, v] of a) {
                this.add(i, v, s);
            }
        } else {
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            // tslint:disable-next-line:forin
            for (prefix in a) {
                this.buildParams(prefix, a[prefix], traditional, s);
            }
        }

        // Return the resulting serialization
        return s.join('&');
    }

    makeParamString(ccPagingResult: CCPagingResult<any>, paramEx = null): string {
        const param = {
            page: ccPagingResult.currentPage,
            size: ccPagingResult.size,
        };
        if (paramEx) {
            Object.assign(param, paramEx);
        }
        return this.param(param);
    }

    path(includeHash?: boolean): string {
        return this.location.path(includeHash);
    }


}
