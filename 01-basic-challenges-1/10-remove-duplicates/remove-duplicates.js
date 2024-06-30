function removeDuplicates(arr) {
  const set = new Set(arr);
  return [...set];
}

module.exports = removeDuplicates;
