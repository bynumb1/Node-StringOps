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


