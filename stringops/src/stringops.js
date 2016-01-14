'use strict';

exports.reverse = function(reversal) {
    console.log(reversal);
    var len=reversal.length-1,
        ret="";
    for(;len >=0; len--) {
        ret+=reversal[len];
    }
    return ret;
}

exports.piglatin = function (translate) {
        var len=translate.length,
            first=translate[0],
            vowels=['a', 'e', 'i', 'o', 'u'],
            sub,
            last;
        if(inArray(first, vowels)) {
                    sub=translate+'ay';
                    console.log(sub)
                    return sub;
        } else {
           sub=translate.substring(1,len)+translate.substring(0,1)
           console.log(sub)
           last = exports.piglatin(sub);
           return last;
        }
}

function inArray(search, array) {
    return array.indexOf(search) > -1;
}
