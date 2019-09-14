function newPresenter(view, startGame) {
  let callbacks = []
  let dettach;
  const presenter = {
    whenUserAttemptsToGuessLetter(callback) {
      callbacks = [...callbacks, callback]
    },
    showGame(game) {
      view.showGame(game, this)
    },
    showWinningGame(secretWord) {
      view.showWinningGame(this, secretWord)
    },
    showGameOver(secretWord) {
      view.showGameOver(this, secretWord)
      dettach()
    },
    restartGame() {
      startGame()
    },
    dispatchInputLetter(letter) {
      if (letter.trim() === "") return;
      callbacks.forEach(cb => cb(letter))
    },
  }
  dettach = view.attach(presenter)
  return presenter
}
module.exports = newPresenter;