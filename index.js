var parser = require('ua-parser-js');
var nodeWX = require('node-weixin-api');

/**
 * 社交授权
 * @constructor
 */
function SocialPassport() {}
SocialPassport.prototype.start = function (req,res) {
    var ua = parser(req.headers['user-agent']);
    var socialUA = new SocialUA(ua.ua);
    if (socialUA.isWX()) {
        var nwo = nodeWX.oauth;
        console.log(nwo);
        var appId = '2434';
        var redirectUri = 'baidu.com';
        var state = Math.random();
        var userInfo = 1;
        var url = nwo.createURL(appId, redirectUri, state, userInfo);
        res.redirect( url );

    } else if (socialUA.isQQ()) {

    } else if (socialUA.isWB()) {

    }
};

/**
 * 社交类型UA判断
 *
 * @param ua
 * @constructor
 */
function SocialUA(ua) {
    this.ua = ua.toLowerCase();
}
SocialUA.prototype.isWX = function () {
    return (/micromessenger/.test(this.ua)) ? true : false;
};
SocialUA.prototype.isQQ = function () {
    return (/qq/.test(this.ua)) ? true : false;
};
SocialUA.prototype.isWB = function () {
    return (/weibo/.test(this.ua)) ? true : false;
};

module.exports = new SocialPassport();
