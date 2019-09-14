function replaceLetterInPlaceholders(letters, placeholders, letterToMatch) {

  letters.forEach((letter, index) => {
    if (letter === letterToMatch) {
      placeholders[index] = letter
    }
  })
  return placeholders
}
module.exports = replaceLetterInPlaceholders