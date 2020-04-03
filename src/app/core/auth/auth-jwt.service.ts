import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthJwtService {

    private tokenName = 'authenticationToken';

    constructor(
    ) {
    }
}
