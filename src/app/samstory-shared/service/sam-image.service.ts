import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {IMAGE_SERVER_FLAG, IMAGE_SERVER_URL, ImageType, SAMSTORY_BACK_URL, STREAM_IMAGE_VIEWER_URL} from '../../app.constants';
import {ImageMeta} from '../../model/image.meta.model';
import {isPlatformServer} from '@angular/common';
import {StreamsView} from '../../model/streams-view';

@Injectable({
    providedIn: 'root'
})
export class SamImageService {

    constructor(
        @Inject(PLATFORM_ID) private platform: any
    ) {
    }

    /**
     * cache 서버 url 가져오기
     */
    private getImageServerUrl() {
        if (isPlatformServer((this.platform))) {
            return IMAGE_SERVER_URL;
        }
        return IMAGE_SERVER_URL.replace('http:', '');
    }

    /**
     * cach 서버 url 만들기, 타입만 있을 때
     * @param type
     * @param url
     */
    private makeImageUrl(type: ImageType, url: string) {
        const imageServerUrl = this.getImageServerUrl();
        return `${imageServerUrl}/image/${type}?url=${encodeURIComponent(url)}&w=766`;
    }

    /**
     * cache
     * @param url
     * @param typeSize
     */
    private makeTypeSizeImageUrl(meta: ImageMeta, url: string) {
        const type = meta.imageType;
        const size = `${meta.width}X${meta.height}`;
        const imageServerUrl = this.getImageServerUrl();
        return `${imageServerUrl}/image/${type}/${size}?url=${encodeURIComponent(url)}`;
    }

    /**
     * full url 만들기
     * @param url
     */
    private appendBaseUrl(url: string) {
        return SAMSTORY_BACK_URL + url;
    }

    /**
     * cache 서버의 thumb 파일로 변경
     * @param url
     * @param typeSize
     */
    replaceThumbByUrl(url: string, typeSize = '') {
        if (!IMAGE_SERVER_FLAG) {
            return url;
        }
        if (url.indexOf('data:image') ===  -1) {
            const meta = new ImageMeta();
            if (typeSize === ImageType.FIT) {
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

    /**
     * stream으로부터 이미지 경로를 마들어준다
     * @param stream 스트림
     * @param typeSize 타입 사이즈 정보
     */
    makeAttachPathByStream(stream: StreamsView, typeSize = '') {
        let attachPath = '';
        const attachName = stream.attachName;
        if (attachName) {
            attachPath = this.appendBaseUrl(STREAM_IMAGE_VIEWER_URL) + (stream.samstoryId & 100) + '/' + attachName;
        } else if (stream.imageSrc) {
            attachPath = stream.imageSrc;
        }
        return this.replaceThumbByUrl(attachPath, typeSize);
    }

    /**
     * 첨부파일이나 이미지가 존재하는지 확인
     * @param stream
     */
    existAttachByStream(stream: StreamsView) {
        if (stream === null) {
            return false;
        }
        return (stream.attachName && stream.attachName !== null) || (stream.imageSrc && stream.imageSrc !== null) || (stream.imageUrl && stream.imageUrl !== null);
    }

    /**
     * 컨텐츠에 있는 image를 cache image server url로 바꿈
     * @param contents 컨텐츠
     * @param type 타입
     */
    replaceThumbByContents(contents: string, type: ImageType = ImageType.FIT) {
        if (!IMAGE_SERVER_FLAG) {
            return contents;
        }
        if (isPlatformServer(this.platform)) {
            return contents;
        }
        const startTime = new Date().getTime();
        let $contents = '';
        try {
            if ($(contents).length > 0) {
                contents = `<div>${contents}</div>`;
                $contents = $(contents)
                    .wrapAll(`<div></div>`)
                    .find('img')
                    .attr('src', (i, src) => {
                        if (src.startsWidth && src.startsWith('data:image')) {
                            return src;
                        } else if (src.indexOf('data:image') !== -1) {
                            return src;
                        }
                        return this.makeImageUrl(type, src);
                    })
                    .end()
                    .html();
            } else {
                $contents = contents;
            }
        } catch (e) {
            if (console) {
                console.warn(e);
            }
            return contents;
        }
        const endTime = new Date().getTime();
        return $contents;
    }

    imageErrorHandler($event) {
        $event.target.src = `http://update.coolmessenger.com/_ImageServer/cooledu/onerror.png`;
    }
}
