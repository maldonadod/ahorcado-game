import getWord from "./domain/getWord"
import newAhorcado from "./domain/newAhorcado"
import newPresenter from "./domain/newPresenter"
import UserInterfaceReactImpl from "./UserInterfaceReactImpl";

function InitGame() {
  const secretWord = getWord()
  const game = newAhorcado({
    secretWord,
    shouldGameOverWhenFailsEquals: 5
  })
  const view = UserInterfaceReactImpl()
  const presenter = newPresenter(view);
  presenter.whenUserRequestNewGame(() => InitGame())
  presenter.whenUserAttemptsToGuessLetter(letter => game.tryLetter(letter, presenter))
  game.render(presenter)
}

InitGame()