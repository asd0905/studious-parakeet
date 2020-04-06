import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SamStreamListComponent} from './sam-stream-list/sam-stream-list.component';
import {HttpClient} from '@angular/common/http';
import {EmptyComponent} from './empty/empty.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MakeAttachPathByStreamPipe } from './pipe/make-attach-path-by-stream.pipe';

@NgModule({
    declarations: [
        SamStreamListComponent,
        EmptyComponent,
        LoginComponent,
        MakeAttachPathByStreamPipe
    ],
    exports: [
        SamStreamListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SamstorySharedModule {
}
