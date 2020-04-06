import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {StorageHelper} from '../../../libs/cool-library/libs/storage-helper';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    private storageHelper: StorageHelper = new StorageHelper();

    constructor(
        @Inject(PLATFORM_ID) private platform
    ) {
    }

    setCookie(cname: string, cvalue: string, exdays: number) {
        if (!isPlatformBrowser(this.platform)) {
            return;
        }
        this.storageHelper.setCookie(cname, cvalue, exdays);
    }

    getCookie(name) {
        if (!isPlatformBrowser(this.platform)) {
            return;
        }
        return this.storageHelper.getCookie(name);
    }

    setSessionStorage(name: string, value: string) {
        if (!isPlatformBrowser(this.platform)) {
            return;
        }
        this.storageHelper.setSessionStorage(name, value);
    }

    getSessionStorage(name: string) {
        if (!isPlatformBrowser(this.platform)) {
            return;
        }
        return this.storageHelper.getSessionStorage(name);
    }

    setObjectSessionStorage(name: string, obj: any) {
        if (!isPlatformBrowser(this.platform)) {
            return;
        }
        this.storageHelper.setSessionStorage(name, JSON.stringify(obj));
    }

    getObjectSessionStorage(name: string) {
        if (!isPlatformBrowser(this.platform)) {
            return;
        }
        return JSON.parse(this.storageHelper.getSessionStorage(name));
    }

    removeItemSessionStorage(sname: string) {
        if (!isPlatformBrowser(this.platform)) {
            return;
        }
        return this.storageHelper.removeItemSessionStorage(sname);
    }
}
