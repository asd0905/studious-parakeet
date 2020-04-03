import {TopBandBanner} from './top-band-banner.model';
import {MiddleBandBanner} from './middle-band-banner-model';
import {MainBanner} from './main-banner.model';
import {SubMainBanner} from './submain-banner.model';
import {RightQuickBanner} from './right-quick-banner.model';
import {OneLineNotice} from './one-line-notice.model';
import {RecommendWord} from './recommend-word.model';
import {SmallClub} from './small-club.model';
import {Writers} from './writers.model';
import {AdForNewStreams} from './ad-for-new-streams.model';
import {RecentVideo} from './recent-video.model';
import {EdutechStory} from './edutech-story.model';
import {RecommendSamstory} from './recommend-samstory.model';
import {MiniStream} from './mini-stream';
import { InputRecommendWord } from './input-recommend-word.model';

export class MainViewList {
    topBandBannerList: Array<TopBandBanner>;
    middleBandBannerList: Array<MiddleBandBanner>;
    mainBannerList: Array<MainBanner>;
    subMainBannerList: Array<SubMainBanner>;
    rightQuickBannerList: Array<RightQuickBanner>;
    smallClubSamstoryList: Array<SmallClub>;
    writersSamstoryList: Array<Writers>;
    recommendSamstoryList: Array<RecommendSamstory>;
    adForNewStreamList: Array<AdForNewStreams>;
    recentVideoList: Array<RecentVideo>;
    edutechStoryList: Array<EdutechStory>;
    oneLineNoticeList: Array<OneLineNotice>;
    inputRecommendWordList: Array<InputRecommendWord>;
    recommendWordList: Array<RecommendWord>;
    samstoryTeamStreamList: Array<MiniStream>;
    samstoryTeacherStreamList: Array<MiniStream>;
}
