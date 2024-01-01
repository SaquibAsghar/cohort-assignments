/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowelString = ['a', 'e', 'i', 'o', 'u'];
  let countVowels = 0;
  if (str.trim().length > 0) {
    for (let i = 0; i < str.length; i++) {
      if (vowelString.includes(str[i].toLowerCase())) {
        countVowels += 1;
      }
    }
  }
  return countVowels;
}

module.exports = countVowels;