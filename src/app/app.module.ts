import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SamstorySharedModule} from './samstory-shared/samstory-shared.module';
import {HttpClientModule} from '@angular/common/http';
import {LayoutsModule} from './layouts/layouts.module';
import {LazyLoadScriptService} from './samstory-shared/service/lazy-load-script.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'serverApp'}),
        AppRoutingModule,
        SamstorySharedModule,
        HttpClientModule,
        LayoutsModule
    ],
    providers: [
        {
            deps: [LazyLoadScriptService],
            provide: APP_INITIALIZER,
            useFactory: (lazyLoadScriptService: LazyLoadScriptService) => {
                return () => {
                    return lazyLoadScriptService.loadJquery().toPromise();
                }
            },
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
