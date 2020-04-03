import {Component, isDevMode, OnInit} from '@angular/core';
import {Login} from '../../../libs/cool-library';
import { CLIENT_ID } from 'src/app/app.constants';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    coolLibraryLogin = new Login();

    constructor() {
    }

    ngOnInit(): void {
    }

    login() {
        this.coolLibraryLogin.goDefaultCoolLogin(CLIENT_ID, null, isDevMode());
    }

}
