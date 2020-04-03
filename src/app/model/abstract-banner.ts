export enum BannerType {
    topBandBanner = 'topBandBanner',
    middleBandBanner = 'middleBandBanner',
    mainBanner = 'mainBanner',
    subMainBanner = 'subMainBanner',
    rightQuickBanner = 'rightQuickBanner'
}

export class AbstractBanner {
    id: string;
    type: BannerType;
    imageUrl: string;
    landingUrl: string;
    startDate: string;
    endDate: string;
    createdDate: string;
}