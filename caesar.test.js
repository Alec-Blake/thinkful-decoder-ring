// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe(`ALEC'S CAESAR()`, () => {
  describe(`ERROR HANDLING`, () => {
    it(`should return false if 'shift' value not present`, () => {
      const actual = caesar("Thinkful");

      expect(actual).to.be.false;
    });
    it(`should return false if 'shift' value is 0`, () => {
      const actual = caesar("Thinkful", 0);

      expect(actual).to.be.false;
    });
    it(`should return false if 'shift' value is over 25`, () => {
      const actual = caesar("Thinkful", 99);

      expect(actual).to.be.false;
    });
    it(`should return false if 'shift' value is under -25`, () => {
      const actual = caesar("Thinkful", -26);

      expect(actual).to.be.false;
    });
  });
  describe(`CAESAR() ENCODING`, () => {
    it(`should pass if function exists`, () => {
      expect(caesar).to.be.a("function");
    });
    it(`should encode a message by shifting letters if 'shift' is positive`, () => {
      const actual = caesar("thinkful", 3);
      const expected = "wklqnixo";

      expect(actual).to.equal(expected);
    });
    it(`should encode a message by shifting letters if 'shift' is negative`, () => {
      const actual = caesar("thinkful", -3);
      const expected = "qefkhcri";

      expect(actual).to.equal(expected);
    });
    it(`should maintain spaces and special characters when encoding`, () => {
      const actual = caesar("This is a secret message!", 8);
      const expected = "bpqa qa i amkzmb umaaiom!";

      expect(actual).to.equal(expected);
    });

    it(`should maintain ignore captial letters when encoding`, () => {
        const actual = caesar("THIS", 8);
        const expected = "bpqa";
  
        expect(actual).to.equal(expected);
      });
    
      it(`should wrap around the alphabet if needed when encoding`, () => {
        const actual = caesar("abc", -3);
        const expected = "xyz"

        expect(actual).to.equal(expected);
    });
  });

  describe(`CAESAR() DECODING`, () => {
    it(`should decode a message by shifting letters if 'shift' is positive`, () => {
      const actual = caesar("wklqnixo", 3, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it(`should decode a message by shifting letters if 'shift' is negative`, () => {
      const actual = caesar("qefkhcri", -3, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it(`should maintain spaces and special characters when decoding`, () => {
      const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
      const expected = "this is a secret message!";

      expect(actual).to.equal(expected);
    });

    it(`should ignore captial letters when decoding`, () => {
        const actual = caesar("BPQA", 8, false);
        const expected = "this";
  
        expect(actual).to.equal(expected);
      });

    it(`should wrap around the alphabet if needed when decoding`, () => {
        const actual = caesar("xyz", -3, false);
        const expected = "abc"

        expect(actual).to.equal(expected);
    });
  });
});
