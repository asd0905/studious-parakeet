import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StreamsRoutingModule} from './streams-routing.module';
import {StreamsComponent} from './streams.component';
import {StreamListComponent} from './stream-list/stream-list.component';
import {SamstorySharedModule} from '../samstory-shared/samstory-shared.module';

@NgModule({
    declarations: [StreamsComponent, StreamListComponent],
    imports: [
        CommonModule,
        StreamsRoutingModule,
        SamstorySharedModule
    ]
})
export class StreamsModule {
}
