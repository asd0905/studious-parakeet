import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StreamsComponent} from './streams.component';
import {StreamsResolverService} from './streams-resolver.service';
import {DEFAULT_STREAM_SIZE} from '../app.constants';

const routes: Routes = [
    {
        path: 'latest',
        component: StreamsComponent,
        resolve: {streams: StreamsResolverService},
        data: {
            defaultStreamSize: DEFAULT_STREAM_SIZE
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StreamsRoutingModule {
}
