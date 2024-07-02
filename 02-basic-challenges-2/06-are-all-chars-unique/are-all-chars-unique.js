function areAllCharactersUnique(str) {
  return new Set(str.split("")).size === str.length;
}

module.exports = areAllCharactersUnique;
