import getWord from "./domain/getWord"
import newAhorcado from "./domain/newAhorcado"
import newPresenter from "./domain/newPresenter"
import view from "./view";

function InitGame() {
  const secretWord = getWord()
  const game = newAhorcado({
    secretWord,
    shouldGameOverWhenFailsEquals: 5
  })
  const presenter = newPresenter(view, InitGame);
  presenter.whenUserAttemptsToGuessLetter(letter => game.tryLetter(letter, presenter))
  game.render(presenter)
}

InitGame()