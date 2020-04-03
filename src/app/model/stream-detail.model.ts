import {Attachment} from './attachment.model';
import {StreamMenuWriteType, StreamNoticeType, StreamReservationType} from '../app.constants';
import {CoverImage} from './cover-image.model';

export class StreamDetail {
    streamId: number;
    streamTitle: string;
    contents: string;
    streamMemberId: number;
    coolId: number;
    streamMemberNick: string;
    samstoryMemberId: number;
    hit: number;
    writeDate: string;
    attachmentCnt: number;
    commentCnt: number;
    recommendCnt: number;
    samstoryId: number;
    addressId: string;
    samstoryTitle: string;
    samstoryProfile: string;
    menuId: number;
    menuName: string;
    bMenuOpen: boolean;
    tags: Array<String> = [];
    open: number;
    bNotice: boolean;
    bSourceProtection: boolean;
    attachments: Array<Attachment> = [];
    bSubscribe: boolean;
    bRecommend: boolean;
    bScrap: boolean;
    bClubMember: boolean;
    noticeCondition: number;
    noticeStartDate: string;
    noticeEndDate: string;
    reservationDate: string;
    operators: Array<number>;
    samstoryBizType: number;
    menuWrite: StreamMenuWriteType;
    coverImage: CoverImage;
    bWriterSubscribe: boolean;
    bWriterClubMember: boolean;

    // front 에서 쓰임
    // tslint:disable:variable-name
    _notice: StreamNoticeType;
    _noticeDate: any;
    _reservation: StreamReservationType;
    _reservationDate;
    _reservationHourDate: string;
    _reservationMinDate: string;
    // tslint:enable:variable-name
}
