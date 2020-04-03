var KakaoMapHelper = /** @class */ (function () {
    function KakaoMapHelper(mapOpts) {
        mapOpts = mapOpts || {};
        this.mapOpts = mapOpts || {};
        if (!mapOpts.element) {
            this.mapOpts.element = 'map';
        }
        if (!mapOpts.latitude || !mapOpts.longitude) {
            // ie11에서 반응을 못해서 주석처리
            this.mapOpts.latitude = '37.56455490632751';
            this.mapOpts.longitude = '126.9756149637474';
            /*if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.mapOpts.latitude = position.coords.latitude;
                    this.mapOpts.longitude = position.coords.longitude;
                }, () => {
                    // 내 위치 안나오면 서울시청 좌표
                    this.mapOpts.latitude = '37.56455490632751';
                    this.mapOpts.longitude = '126.9756149637474';
                });
            } else {
                // 내 위치 안나오면 서울시청 좌표
                this.mapOpts.latitude = '37.56455490632751';
                this.mapOpts.longitude = '126.9756149637474';
            }*/
        }
        if (!mapOpts.level) {
            this.mapOpts.level = '4';
        }
    }
    KakaoMapHelper.prototype.latLng = function (latitude, longitude) {
        return new kakao.maps.LatLng(latitude, longitude);
    };
    KakaoMapHelper.prototype.map = function () {
        var mapContainer = document.getElementById(this.mapOpts.element); // 지도를 표시할 div
        if (mapContainer) {
            var mapOption = {
                center: this.latLng(this.mapOpts.latitude, this.mapOpts.longitude),
                level: this.mapOpts.level // 지도의 확대 레벨
            };
            this.mapOpts.map = new kakao.maps.Map(mapContainer, mapOption);
            this.mapOpts.map.relayout();
            // 지도 중심을 변경한다.
            this.mapOpts.map.setCenter(mapOption.center);
            // 마커를 결과값으로 받은 위치로 옮긴다.
        }
    };
    KakaoMapHelper.prototype.marker = function () {
        var latLng = this.latLng(this.mapOpts.latitude, this.mapOpts.longitude);
        var marker = new kakao.maps.Marker({
            'position': latLng,
            'map': this.mapOpts.map
        });
        marker.setPosition(latLng);
        marker.setMap(this.mapOpts.map);
    };
    KakaoMapHelper.prototype.geocoderAddressSearch = function (address, callback) {
        return new kakao.maps.services.Geocoder().addressSearch(address, callback);
    };
    KakaoMapHelper.prototype.geocoder = function () {
        return new kakao.maps.services.Geocoder();
    };
    ;
    return KakaoMapHelper;
}());
export { KakaoMapHelper };
//# sourceMappingURL=kakao-map-helper.js.map