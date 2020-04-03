import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {StreamMeta} from '../../model/stream-meta.model';

@Injectable({
    providedIn: 'root'
})
export class SamMetaService {

    constructor(
        private meta: Meta,
        private title: Title
    ) {
    }

    setStreamDetailMeta(streamMeta: StreamMeta) {
        this.title.setTitle(streamMeta.streamTitle);
        this.meta.updateTag({property: 'og:type', content: 'website'});
        this.meta.updateTag({property: 'og:title', content: streamMeta.streamTitle});
        this.meta.updateTag({property: 'og:image', content: streamMeta.image});
        this.meta.updateTag({property: 'og:url', content: streamMeta.url});
        this.meta.updateTag({property: 'og:description', content: streamMeta.description});
        this.meta.updateTag({property: 'description', content: streamMeta.description});
    }
}
