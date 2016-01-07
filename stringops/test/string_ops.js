var should = require('should');
var ops = require('../src/stringops.js');
describe("stringops", function() {
    it("Should reverse a string", function() {
        var rev = ops.reverse("test");
        rev.should.equal("tset");
    });
});

describe("PigLatin", function() {
    it("Should verify piglatin translation", function() {
        var trans=ops.piglatin('thrust');
        trans.should.equal("ustthray");
    });
});
