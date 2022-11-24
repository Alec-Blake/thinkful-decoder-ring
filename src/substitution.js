// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  // Array of individual lowercase alphabet characters
  const mainAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    // Creates an alphabet set to iterate through and check for repeated characters (ex: "aabbcc")
    const checkForRepeats = new Set(alphabet);
    let cipherKey = [];

    
    if ( 
      // returns false if there is no alphabet argument
      !alphabet ||
      // returns false if alphabet length is not 26 characters
      alphabet.length !== 26 ||
      // returns false if revised length of set is below 26 characters
      [...checkForRepeats].length < 26 ) {
      return false;
    }

    // ENCODING CipherKey
    // checks if encode parameter is true or false
    if (encode) {
      // loops through 26 indexes of characters
      for (let i = 0; i < 26; i++) {
        // mainAlphabet character with same index as alphabet is added to cipherKey
        cipherKey[mainAlphabet[i]] = alphabet[i];
      }

      // DECODING CipherKey
    } else {
      // loops through 26 indexes of characters
      for (let i = 0; i < 26; i++) {
        // Alphabet character with same index as mainAlphabet is added to cipherKey
        cipherKey[alphabet[i]] = mainAlphabet[i];
      }
    }
    // turns inputted message into lowercase
    let result = input.toLowerCase()
    // splits lowercased message into array of individual characters
      .split("")
      // creates new array from split lowercased characters
      .map((character) => {
        // checks if current character of iteration in string is a space
         if (character === " ") {
          // if character is a space, add to the mapped array
           return " ";
           }
         
          //  checks if current character of iteration is not a space
         else { 
          // if not a space, add the character to mapped array from cipherKey
          return cipherKey[character]
         };
      });
      // change the mapped array from result into one string
    return result.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
