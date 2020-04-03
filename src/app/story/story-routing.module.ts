import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {STREAM_PATH_CONTEXT} from '../app.constants';
import {UserRouteAccessService} from '../core/auth/user-route-access.service';
import {StreamDetailResolverService} from './stream-detail/service/stream-detail-resolver.service';


const routes: Routes = [
    {
        path: `:samstoryAddress/${STREAM_PATH_CONTEXT}/:streamId`,
        loadChildren: () => import('./stream-detail/stream-detail.module').then(m => m.StreamDetailModule),
        canActivate: [UserRouteAccessService],
        data: {universal: true},
        resolve: {streamDetail: StreamDetailResolverService}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoryRoutingModule {
}
