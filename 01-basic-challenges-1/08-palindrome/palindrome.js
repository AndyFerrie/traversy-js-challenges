function isPalindrome(str) {
  let cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = "";
  for (let i = cleanString.length - 1; i >= 0; i--) {
    reversed += cleanString[i];
  }
  return cleanString === reversed;
}

module.exports = isPalindrome;
