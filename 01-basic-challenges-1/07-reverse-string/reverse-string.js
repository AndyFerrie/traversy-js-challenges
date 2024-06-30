function reverseString(str) {
  let reversed = [];
  for (char in str) {
    reversed.unshift(str[char]);
  }
  return reversed.join("");
}

module.exports = reverseString;
