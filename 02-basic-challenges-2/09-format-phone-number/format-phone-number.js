function formatPhoneNumber(numbers) {
  const slice1 = numbers.slice(0, 3).join("");
  const slice2 = numbers.slice(3, 6).join("");
  const slice3 = numbers.slice(6, 10).join("");
  return `(${slice1}) ${slice2}-${slice3}`;
}

module.exports = formatPhoneNumber;

// "(123) 456-7890"
