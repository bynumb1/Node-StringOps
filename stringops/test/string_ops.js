var should = require('should');
var ops = require('../stringops.js');
describe("stringops", function() {
    it("Should reverse a string", function() {
        var rev = ops.reverse("test");
        rev.should.equal("tset");
    });
});
