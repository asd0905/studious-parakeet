import {OnChanges, Input, Output, EventEmitter, HostListener, SimpleChanges, AfterViewInit, ViewChildren, QueryList} from '@angular/core';
import {CCPagingResult} from '../../libs/cool-library/libs/model/CCPagingResult';

export class InfinityBase implements OnChanges, AfterViewInit {

    protected isLoaded: boolean;
    @Input()
    pagingResult: CCPagingResult<any>;
    @Output()
    protected scrollDown = new EventEmitter();
    @Output()
    afterViewInit = new EventEmitter();
    @ViewChildren('listRef')
    listRef: QueryList<any>;

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

    ngAfterViewInit(): void {
        this.afterViewInit.emit();
    }
}
