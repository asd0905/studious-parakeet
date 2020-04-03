import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {IMAGE_SERVER_FLAG, IMAGE_SERVER_URL, ImageSize, ImageType} from '../../app.constants';
import {ImageMeta} from '../../model/image.meta.model';
import {isPlatformServer} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SamImageService {

    constructor(
        @Inject(PLATFORM_ID) private platform: any
    ) {
    }

    replaceThumbByUrl(url: string, typeSize = '') {
        if (!IMAGE_SERVER_FLAG) {
            return url;
        }
        if (url.indexOf('data:image') ===  -1) {
            const meta = new ImageMeta();
            if (typeSize === ImageSize.FIT) {
                return this.makeImageUrl(typeSize, url);
            }
            if (typeSize) {
                const type = typeSize.substring(0, 1);
                const size = typeSize.substring(1, typeSize.length);
                const sizes = size.split('X');
                meta.imageType = ImageType[type];
                meta.width = +sizes[0];
                meta.height = +size[1];
            } else {
                meta.imageType = ImageType.T;
                meta.width = 210;
                meta.height = 118;
            }
            return this.makeTypeSizeImageUrl(meta, url);
        }
        return url;
    }

    private getImageServerUrl() {
        if (isPlatformServer(this.platform)) {
            return IMAGE_SERVER_URL;
        }
        return IMAGE_SERVER_URL.replace('http:', '');
    }

    private makeImageUrl(size: ImageSize, url: string) {
        const imageServerUrl = this.getImageServerUrl();
        return `${imageServerUrl}/image/${size}?url=${encodeURIComponent(url)}`;
    }

    private makeTypeSizeImageUrl(meta: ImageMeta, url: string) {
        const type = meta.imageType;
        const size = `${meta.width}X${meta.height}`;
        const imageServerUrl = this.getImageServerUrl();
        return `${imageServerUrl}/iamge/${type}/${size}?url=${encodeURIComponent(url)}`;
    }

    imageErrorHandler($event) {
        $event.target.src = `http://update.coolmessenger.com/_ImageServer/cooledu/onerror.png`;
    }
}
