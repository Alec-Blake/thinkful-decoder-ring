// Write your tests here!
const { expect } = require("chai");

const { polybius } = require("../src/polybius");

describe("ALEC's POLYBIUS()", () => {
    describe("POLYBIUS ENCODING", () => {
        it("should pass if function exists", () => {
            
            expect(polybius).to.be.a("function");
        });

        it("should encode messages using number pairs", () => {
            const actual = polybius("hello");
            const expected = "3251131343"

            expect(actual).to.equal(expected);
        });

        it("should translate both i/j as 42", () => {
            const actual = polybius("ij");
            const expected = "4242"

            expect(actual).to.equal(expected);
        });

        it("should maintain spaces in message", () => {
            const actual = polybius("hello thinkful");
            const expected = "3251131343 4432423352125413"

            expect(actual).to.equal(expected);
        });
    });

    describe("POLYBIUS DECODING", () => {
        it("should decode messages to letters from number pairs", () => {
            const actual = polybius("3251131343", false);
            const expected = "hello"

            expect(actual).to.equal(expected);
        });

        it("should translate 42 as both i/j", () => {
            const actual = polybius("42", false);
            const expected = "(i/j)"

            expect(actual).to.equal(expected);
        });

        it("should maintain spaces in message", () => {
            const actual = polybius("3251131343 4432423352125413", false);
            const expected = "hello th(i/j)nkful"

            expect(actual).to.equal(expected);
        });

        it("should return false if number input is odd", () => {
            const actual = polybius("626", false);
            
            expect(actual).to.be.false;
        });
    });
});