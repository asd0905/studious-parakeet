var SocialShareHelper = /** @class */ (function () {
    function SocialShareHelper() {
    }
    SocialShareHelper.prototype.socialKind = function (socialOpts) {
        var o = {};
        var snsType = socialOpts.name;
        var shareUrl = document.location.href;
        if (socialOpts.href) {
            shareUrl = socialOpts.href;
        }
        var txt = socialOpts.txt;
        var _url = encodeURIComponent(shareUrl);
        var _txt = encodeURIComponent(txt);
        var _br = encodeURIComponent('\r\n');
        var shareImage = socialOpts.img;
        switch (snsType) {
            case 'facebook':
                o = {
                    method: 'popup',
                    url: '//www.facebook.com/sharer/sharer.php?u=' + _url
                };
                break;
            case 'twitter':
                o = {
                    method: 'popup',
                    url: '//twitter.com/intent/tweet?text=' + _txt + '&url=' + _url
                };
                break;
            case 'google':
                o = {
                    method: 'popup',
                    url: '//plus.google.com/share?url=' + _url + '&image=' + shareImage
                };
                break;
            case 'blog':
                o = {
                    method: 'popup',
                    url: '//share.naver.com/web/shareView.nhn?url=' + _url + '&title=' + _txt
                };
                break;
            case 'band':
                o = {
                    method: 'web2app',
                    param: 'create/post?text=' + _txt + _br + _url,
                    a_store: 'itms-apps://itunes.apple.com/app/id542613198?mt=8',
                    g_store: 'market://details?id=com.nhn.android.band',
                    a_proto: 'bandapp://',
                    g_proto: 'scheme=bandapp;package=com.nhn.android.band'
                };
                break;
            default:
                alert('지원하지 않는 SNS입니다.');
                return;
        }
        switch (o.method) {
            case 'popup':
                window.open(o.url, "share_" + snsType, "resizable=no");
                break;
            case 'web2app':
                if (navigator.userAgent.match(/android/i)) {
                    // Android
                    setTimeout(function () { location.href = 'intent://' + o.param + '#Intent;' + o.g_proto + ';end'; });
                }
                else if (navigator.userAgent.match(/(iphone)|(ipod)|(ipad)/i)) {
                    // Apple
                    setTimeout(function () { location.href = o.a_store; });
                    setTimeout(function () { location.href = o.a_proto + o.param; });
                }
                else {
                    if (snsType === "band") {
                        var sTxt = _txt + " | " + _url;
                        window.open("http://www.band.us/plugin/share?body=" + sTxt, "share_band", "width=410, height=540, resizable=no");
                        return;
                    }
                    alert('이 기능은 모바일에서만 사용할 수 있습니다.');
                }
                break;
        }
    };
    return SocialShareHelper;
}());
export { SocialShareHelper };
//# sourceMappingURL=social-share-helper.js.map