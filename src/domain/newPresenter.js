function newPresenter(view) {
  let callbacks = []
  let dettach;
  let startGameCommand = () => {}
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
      startGameCommand()
    },
    dispatchInputLetter(letter) {
      if (letter.trim() === "") return;
      callbacks.forEach(cb => cb(letter))
    },
    whenUserRequestNewGame(initNewGame) {
      startGameCommand = initNewGame
    },
  }
  dettach = view.attach(presenter)
  return presenter
}
module.exports = newPresenter;