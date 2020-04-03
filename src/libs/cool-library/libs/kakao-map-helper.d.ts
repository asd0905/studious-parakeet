export declare class KakaoMapHelper {
    private mapOpts;
    constructor(mapOpts?: any);
    latLng(latitude: any, longitude: any): any;
    map(): void;
    marker(): void;
    geocoderAddressSearch(address: string, callback?: any): any;
    geocoder(): any;
}
