import {StoryMenu} from "./story-menu.model";

export class StoryHome {
    samstoryId: number;
    samstoryTitle: string;
    memberId: number;
    coolId: number;
    memberName: string;
    memberNickname: string;
    profileImage: string;
    coverImageFolder: string;
    coverImageName: string;
    coverCustomImage: string;
    addressId: string;
    keywords: Array<string>;
    streamCnt: number;
    subscriberCnt: number;
    memberCnt: number;
    bSubscribed: boolean;
    bHaveClub: boolean;
    phoneMobile: string;

    menus: Array<StoryMenu>;

    operators: Array<number>;
}
