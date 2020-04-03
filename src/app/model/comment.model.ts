import {Attachment} from './attachment.model';

export enum CommentMode {
    show, modify, reply
}
export class StreamComment {
    commentId: number;
    streamId: number;
    comment = '';
    writeDate: string;
    memberId: number;
    memberNickName: string;
    memberProfileImage: string;
    bSecret: boolean;
    addressId: string;
    commentParentId: number;
    commentDepth: number;
    bDelete: number;
    attachments: Array<Attachment> = [];
    // front 에서만 쓰임
    _tempComment: string;
    _mode: any | CommentMode = CommentMode.show;
}
