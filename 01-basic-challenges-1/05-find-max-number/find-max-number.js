function findMaxNumber(numbers) {
  let maxNumber = 0;
  for (let number of numbers) {
    if (number > maxNumber) {
      maxNumber = number;
    }
  }
  return maxNumber;
}

module.exports = findMaxNumber;
