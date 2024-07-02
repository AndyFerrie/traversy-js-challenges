function validateEmail(email) {
  const regex = /^[^@]+@[^@]*\.[^@]*$/;
  return regex.test(email);
}

module.exports = validateEmail;
