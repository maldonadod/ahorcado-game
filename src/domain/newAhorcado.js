const replaceLetterInPlaceholders = require("./replaceLetterInPlaceholders")

function newAhorcado({ secretWord, shouldGameOverWhenFailsEquals = 5 }) {
  const letters = secretWord.split("").map(letter => letter.toUpperCase())
  let placeholders = letters.map(_ => "_")
  let fails = []
  return {
    render(presenter) {
      presenter.showGame({
        fails,
        placeholders
      })
    },
    tryLetter(letter, presenter) {
      letter = letter.toUpperCase()
      const index = letters.findIndex(l => l === letter);
      if (index >= 0) {
        placeholders = replaceLetterInPlaceholders(letters, placeholders, letter);

        if (placeholders.includes("_")) {
          presenter.showGame({
            fails,
            placeholders
          })
        } else {
          presenter.showWinningGame(secretWord)
        }

      } else {
        fails = [...fails, letter]

        if (fails.length === shouldGameOverWhenFailsEquals) {
          presenter.showGameOver(secretWord)
        } else {
          presenter.showGame({
            fails,
            placeholders
          })
        }
      }
    }
  }
}
module.exports = newAhorcado;