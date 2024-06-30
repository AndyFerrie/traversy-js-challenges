function arrayIntersection(arr1, arr2) {
  const array = [];
  for (let num of arr1) {
    if (arr2.includes(num)) {
      array.push(num);
    }
  }
  return array;
}

module.exports = arrayIntersection;
