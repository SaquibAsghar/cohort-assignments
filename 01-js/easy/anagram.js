/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const str1Chars = {};

  // for string 1
  str1.toLowerCase().split('').forEach(char => {
    if(!str1Chars[char]) {
      str1Chars[char] = 1;
      return;
    }
    str1Chars[char] += 1;
  });

  // for string 2
  let isTrue = true;
  str2.toLowerCase().split('').forEach(char => {
    if (!str1Chars[char] || str1Chars[char] === 0) {
      
      isTrue = false
      return isTrue;
    }
    str1Chars[char]--;
  });
  return isTrue;
}

module.exports = isAnagram;
