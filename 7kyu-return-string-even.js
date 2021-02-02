function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string"
  }
  let newString = string.split("")
  return newString.filter((word, index) => (index % 2))
}