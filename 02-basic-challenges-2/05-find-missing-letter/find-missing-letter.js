function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(arr[0].toLowerCase());

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].toLowerCase() !== alphabet[startIndex + i]) {
      return arr[i] === arr[i].toUpperCase()
        ? alphabet[startIndex + i].toUpperCase()
        : alphabet[startIndex + i];
    }
  }
}

module.exports = findMissingLetter;
