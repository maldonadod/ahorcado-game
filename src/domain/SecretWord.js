class SecretWord {
  constructor(word, placeholderSymbol, fails = [], uncoverLetters = []) {
    this.word = word
    this.placeholderSymbol = placeholderSymbol
    this.fails = fails
    this.uncoverLetters = uncoverLetters
    function toPlaceholderOrLetter(letter) {
      return uncoverLetters.includes(letter)
        ? letter
        : placeholderSymbol
    }
    this.placeholders = letters(this.word).map(toPlaceholderOrLetter)
  }
  render(presenter) {
    presenter.showGame({
      placeholders: this.placeholders,
      fails: this.fails
    })
  }
  tryLetter(letter) {
    letter = toUpper(letter)
    const { word, placeholderSymbol, uncoverLetters, fails } = this
    return includes(word, letter)
      ? new SecretWord(word, placeholderSymbol, fails, extend(uncoverLetters, letter))
      : new SecretWord(word, placeholderSymbol, extend(fails, letter), uncoverLetters)
  }
}

function includes(word, letter) {
  const index = letters(word).indexOf(letter)
  return index >= 0
}
function letters(word) {
  return word.split("").map(toUpper)
}
function toUpper(letter) {
  return letter.toUpperCase()
}
function extend(list, item) {
  return [...list, item]
}

module.exports = SecretWord;