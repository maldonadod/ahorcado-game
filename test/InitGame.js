const newAhorcado = require("../src/domain/newAhorcado");
const newPresenter = require("../src/domain/newPresenter");

function InitGame(params) {
  const view = {
    showGame: jest.fn(),
    showWinningGame: jest.fn(),
    showGameOver: jest.fn(),
  }
  const game = newAhorcado(params)
  const presenter = newPresenter(view);
  presenter.whenUserAttemptsToGuessLetter(letter => game.tryLetter(letter, presenter))

  game.render(presenter)

  return {
    verify: (callback) => callback(presenter, view)
  }
}
module.exports = InitGame;