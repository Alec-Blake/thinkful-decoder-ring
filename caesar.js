// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // Helper function that converts split input array into cipher
  function toCharCode(array, shift) {
    // loops through each index of split input array
    return array.map((character) => {
      // Variable declaration that lowercases character and then finds character code
      const code = character.toLowerCase().charCodeAt();

      // If CharCode is between 97 and 122(a lowercase letter) then shift letter, otherwise,
      // if not a lowercase letter(punctuation/symbol), don't shift, leave character as is
      return code >= 97 && code <= 122 ? code + shift : character;
    });
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    // Return false if shift value is not present,equal to 0, less than -25, or greater than 25
    if (!shift || shift == 0 || shift < -25 || shift > 25) {
      return false;
    }

    // Determines whether function Encodes or Decodes
    // If encode equals false, invert the given shift(which decodes)
    if (!encode) { shift *= -1 };

    //Variable declaration that turns input's string into array of individual characters
    const inputArray = input.split("");

    // Variable declaration that is the string text in CharacterCode
    const inputNumbers = toCharCode(inputArray, shift);

    // Declaration that Handles case where the shift goes left of `a` or right of `z`, wraps around lowercased alphabet into new array
    const correctedNumbers = inputNumbers.map((num) => {
      // checks if character in each array index is a charCode(a letter) or a symbol
      if (typeof num === "number") {
        // Checks if charcode was shifted off the lowercase alphabet range,
        // if number out of range, then adds/subtracts length of alphabet to bring back
        //  in range and "wrap around to other end of alphabet"
        if (num < 97) { return num + 26 };
        if (num > 122) { return num - 26 };
      }
      // Returns corrected charCode to array index
      return num;
    });

    // Variable declaration that loops shifted CharCodes back into letters and joined into a string
    const charCodeToString = correctedNumbers.map((characterValue) => {

        // Checks if characterValue is a charCode or a specical symbol
        return typeof characterValue === "number"

          // If charcode, then convert back into a letter
          ? String.fromCharCode(characterValue)

          //  If not charCode(value is a symbol), return value to string
          : characterValue;
      })
      // joins each character value back into a string
      .join("");

    return charCodeToString;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
