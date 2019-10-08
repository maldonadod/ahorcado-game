const SecretWord = require("./SecretWord")
const PLACEHOLDER_SYMBOL = "_"

function newAhorcado({ secretWord, shouldGameOverWhenFailsEquals = 5 }) {
	let word = new SecretWord(secretWord, PLACEHOLDER_SYMBOL)
  return {
    render(presenter) {
			word.render(presenter)
    },
    tryLetter(letter, presenter) {
			word = word.tryLetter(letter)
			if (word.fails.length === shouldGameOverWhenFailsEquals) {
				presenter.showGameOver(secretWord)
			} else if (!word.placeholders.includes(PLACEHOLDER_SYMBOL)) {
				presenter.showWinningGame(secretWord)
			} else {
				presenter.showGame({
					placeholders: word.placeholders,
					fails: word.fails,
				})
			}
    }
  }
}
export default newAhorcado;