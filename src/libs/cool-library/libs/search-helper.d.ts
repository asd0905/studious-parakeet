export declare class SearchHelper {
    /**
     * 페이지 조회 정보를 저장하는 함수
     * @param serviceType
     * @param streamId
     * @param coolIdx
     * @param env
     */
    coolPageViewForStream(serviceType: any, subServiceType: string, streamId: number, coolIdx: number, env?: 'prod' | 'dev' | 'local'): void;
}
