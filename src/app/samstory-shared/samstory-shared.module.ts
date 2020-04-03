import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SamStreamListComponent} from './sam-stream-list/sam-stream-list.component';
import {HttpClient} from '@angular/common/http';
import {EmptyComponent} from './empty/empty.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        SamStreamListComponent,
        EmptyComponent,
        LoginComponent
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
