import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SAMSTORY_PATH_CONTEXT, STREAM_PATH_CONTEXT} from './app.constants';
import {EmptyComponent} from './samstory-shared/empty/empty.component';
import {UserRouteAccessService} from './core/auth/user-route-access.service';


const routes: Routes = [
    {
        path: 'empty', component: EmptyComponent
    },
    {
        path: STREAM_PATH_CONTEXT,
        loadChildren: () => import('./streams/streams.module').then(m => m.StreamsModule),
        canActivate: [UserRouteAccessService]
    },
    {
        path: SAMSTORY_PATH_CONTEXT,
        loadChildren: () => import('./story/story.module').then(m => m.StoryModule),
        data: {universal: true},
        canActivate: [UserRouteAccessService]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
