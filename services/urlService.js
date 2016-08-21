var encode = [];
var decode = {};

var genCharArray = function (charA, charZ) {
    var arr = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i<=j; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
};

encode = encode.concat(genCharArray('a', 'z'));
encode = encode.concat(genCharArray('A', 'Z'));
encode = encode.concat(genCharArray('0', '9'));

for (var i = 0; i < encode.length; i++) {
    decode[encode[i]] = i;
}

var getShortUrl = function(longUrl, longToShortHash, shortToLongHash) {
    if (longUrl.indexOf('http') === -1) {
        longUrl = "http://" + longUrl;
    }
    if (longToShortHash[longUrl] != null) {
        return longToShortHash[longUrl];
    } else {
        var shortUrl = generateShortUrl(longToShortHash);
        longToShortHash[longUrl] = shortUrl;
        shortToLongHash[shortUrl] = longUrl;
        return shortUrl;
    }
};

// var generateShortUrl = function (longToShortHash) {
//     return Object.keys(longToShortHash).length;
// };

var generateShortUrl = function(longToShortHash) {
    return convertTo62(Object.keys(longToShortHash).length);
};


var getLongUrl = function(shortUrl, shortToLongHash) {
    return shortToLongHash[shortUrl];
};

var convertTo62 = function (num) {
    var result = '';
    do {
        result = encode[num % 62] + result;
        num = Math.floor(num / 62);
    } while (num);

    return result;
};

module.exports = {
    getShortUrl: getShortUrl,
    getLongUrl: getLongUrl
};