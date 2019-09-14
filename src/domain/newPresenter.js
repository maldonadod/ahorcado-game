function newPresenter(view, startGame) {
  let callbacks = []
  function dispatchInputLetter(letter) {
    if (letter.trim() === "") return;
    callbacks.forEach(cb => cb(letter))
  }
  function listener(e) {
    dispatchInputLetter(e.key)
  }
  document.addEventListener("keypress", listener)
  return {
    whenUserAttemptsToGuessLetter(callback) {
      callbacks = [...callbacks, callback]
    },
    showGame(game) {
      view.showGame(game, this)
    },
    showWinningGame() {
      view.showWinningGame(this)
    },
    showGameOver(secretWord) {
      document.removeEventListener("keypress", listener)
      view.showGameOver(this, secretWord)
    },
    restartGame() {
      startGame()
    },
    dispatchInputLetter,
  }
}
module.exports = newPresenter;