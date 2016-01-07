'use strict';

exports.reverse = function(reversal) {
    console.log(reversal);
    var len=reversal.length-1;
    var ret="";
    for(;len >=0; len--) {
        ret+=reversal[len];
    }
    return ret;
}

exports.piglatin = function (translate) {
        var len=translate.length;
        var sub;
        var last;
        if(translate[0]==='a' 
                || translate[0]==='e'
                || translate[0]==='i'
                || translate[0]==='o'
                || translate[0]==='u') {
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
