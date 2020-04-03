import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StreamsComponent} from './streams.component';
import {StreamsResolverService} from './streams-resolver.service';

const routes: Routes = [
    {
        path: 'latest', component: StreamsComponent, resolve: {streams: StreamsResolverService}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StreamsRoutingModule {
}
