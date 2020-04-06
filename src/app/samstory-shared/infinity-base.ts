import {OnChanges, Input, Output, EventEmitter, HostListener, SimpleChanges} from '@angular/core';
import {CCPagingResult} from '../../libs/cool-library/libs/model/CCPagingResult';

export class InfinityBase implements OnChanges {

    protected isLoaded: boolean;
    @Input()
    pagingResult: CCPagingResult<any>;
    @Output()
    protected scrollDown = new EventEmitter();
    @Output()
    afterViewInit = new EventEmitter();

    @HostListener('window:scroll', ['$event'])
    onResize(event) {
        if (this.isLoaded === true) {
            const distancePercent = 20;
            const scrollTop = $(window).scrollTop();
            const height = $(document).height() - $(window).height();
            if (scrollTop > height - (height * (distancePercent) / 100)) {
                this.isLoaded = false;
                this.onScrollDown();
            }
        }
    }

    onScrollDown() {
        this.scrollDown.emit();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.isLoaded = true;
    }
}
