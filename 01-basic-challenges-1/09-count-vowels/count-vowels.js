function countVowels(str) {
  let count = 0;
  for (char in str) {
    if (isVowel(str[char])) {
      count++;
    }
  }
  return count;
}

function isVowel(char) {
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  return vowels.includes(char);
}

module.exports = countVowels;
