function newPresenter(view) {
  let dispatchInputLetterCallback;
  let dettach;
  let startGameCommand = () => { }
  const presenter = {
    whenUserAttemptsToGuessLetter(callback) {
      dispatchInputLetterCallback = callback
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
      dispatchInputLetterCallback(letter)
    },
    whenUserRequestNewGame(initNewGame) {
      startGameCommand = initNewGame
    },
  }
  dettach = view.attach(presenter)
  return presenter
}
export default newPresenter;