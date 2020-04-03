
export class StreamYoutube {
    samstoryId: number;
    samstoryAddressId: string;
    samstoryTitle: string;
    streamId: number;
    streamTitle: string;
    youtubeList: Array<Youtube>;
}

class Youtube {
    img: string;
    src: string;
}

export class YoutubeSrc {
    samstoryId: number;
    samstoryAddressId: string;
    samstoryTitle: string;
    streamId: number;
    streamTitle: string;
    thumb: string
    src: string;
}
