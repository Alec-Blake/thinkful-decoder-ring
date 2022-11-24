// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("ALEC'S SUBSTITUTION()", () => {
    describe("ERROR HANDLING", () => {

        it("should pass if function exists", () => {
            expect(substitution).to.be.a("function");
        });

        it("should return false if alphabet is not 26 characters long", () => {
            const actual = substitution("hello", "abcdefg");
            expect(actual).to.be.false;
        });

        it("should return false if alphabet characters are not unique", () => {
            const actual = substitution("message", "aabbccddeeffgghhiijjkkllmm");
            expect(actual).to.be.false;
        });

        it("should return false if alphabet is missing", () => {
            const actual = substitution("message");
            expect(actual).to.be.false;
        });
    });

    describe("SUBSTITUTION ENCODING", () => {

        it("should properly encode the message by using the given alphabet", () => {
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "jrufscpw";
            expect(actual).to.equal(expected);
        });

        it("should work with special characters", () => {
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            const expected = "y&ii$r&";
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and ignore capitalization", () => {
            const actual = substitution("T H I N K F U L", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "j r u f s c p w";
            expect(actual).to.equal(expected); 
        });
    });

    describe("SUBSTITUTION DECODING", () => {

        it("should properly encode the message by using the given alphabet", () => {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });

        it("should work with special characters", () => {
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and ignore capitalization", () => {
            const actual = substitution("J R U F S C P W", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "t h i n k f u l";
            expect(actual).to.equal(expected); 
        });
    });
});
``