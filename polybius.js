// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  const encodeSquare = {
    a: "11", b: "21", c: "31", d: "41", e: "51",
    f: "12", g: "22", h: "32", i: "42", j: "42",
    k: "52", l: "13", m: "23", n: "33", o: "43",
    p: "53", q: "14", r: "24", s: "34", t: "44",
    u: "54", v: "15", w: "25", x: "35", y: "45",
    z: "55", [" "]: " ",
  };

  const decodeSquare = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
    [" "]: " ",
  };

  function polybius(input, encode = true) {
    // your solution code here

    // ENCODE
    if (encode) {

      // returns below code as final result
      return input

      // puts every character for input into an array
        .split("")

        // loops through array and creates a new mapped array from matched character key values in encodeSquare that are then lowercased, using bracket notation
        // Using bracket notation, lowerCased letter is key that pulls number value from object 
        .map((letter) => {
          return encodeSquare[letter.toLowerCase()];
        })

        // each character is then joined together into a string
        .join("");
    } else {
    // DECODE

    // if spaces in numerical input are removed, and total length is not divisible by two, return false
      if (input.replace(/\s/g, "").length % 2 !== 0) return false;

      // returns below code as final result
      return input

      // search for matching number pairs within input string with spaces included
      // number pairs are then put into an array via .match
        .match(/[0-9]{2}|\s/g)

        // mapped array is created and returned with matching key values using bracket notation
        // decodeSquare key(number) is passed and value(letter) is returned
        .map((number) => {
          return decodeSquare[number];
        })

        // mapped array is then joined together in a string
        .join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
