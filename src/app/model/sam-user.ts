import {INVALID_ID} from '../app.constants';

export class SamUser {
    authenticated = false;
    addressId: string;
    authorities: Array<string>;
    bbiz: number;
    coolId: string;
    coolUId: string;
    email: string;
    kMemberId: number;
    name: string;
    nickname: string;
    phoneMobile: string;
    samstoryId: number;
    sortKey: string;
    username: string;

    static createAnonymous() {
        const samUser = new SamUser();
        samUser.kMemberId = INVALID_ID;
        samUser.authorities = ['ROLE_ANONYMOUS'];
        samUser.samstoryId = 0;
        samUser.username = 'ROLE_ANONYMOUS';
        return samUser;
    }
}
