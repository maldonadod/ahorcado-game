import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import abecedario from "./abecedario"

function render(view) {
  ReactDOM.render(view, document.getElementById('root'));
}

function toPlaceHolder(placeholder, i) {
  return (
    <span className="placeholder" key={i}>{placeholder}</span>
  )
}
function GameContainer({children}) {
  return (
    <div className="game-container">
      {children}
    </div>
  )
}
function Game({ fails, placeholders, dispatchInputLetter }) {
  return (
    <GameContainer>
      <section>
        {placeholders.map(toPlaceHolder)}
      </section>
      <section>
        {abecedario.map(toUpperCase).map((letter, index) => (
          <button
            onClick={() => dispatchInputLetter(letter)}
            className={fails.includes(letter) ? "letter-block disabled" : placeholders.includes(letter) ? "letter-block active" : "letter-block"}
            key={index}
          >{letter}</button>
        ))}
      </section>
    </GameContainer>
  )
}
function toUpperCase(letter) {
  return letter.toUpperCase()
}
function FinalFeedback({ message, presenter, secretWord }) {
  return (
    <GameContainer>
      <div>
        <p>{message}</p>
        <p>La palabra es: {secretWord}</p>
        <button className="play-again-button" onClick={() => presenter.restartGame()}>Jugar de nuevo</button>
      </div>
    </GameContainer>
  )
}
function WinningGame({ presenter, secretWord }) {
  return <FinalFeedback presenter={presenter} secretWord={secretWord} message="Ganaste 😼" />
}
function GameOver({ presenter, secretWord }) {
  return <FinalFeedback presenter={presenter} secretWord={secretWord} message="Perdiste 😾" />
}
function UserInterfaceReactImpl() {
  let presenterInstance;
  return {
    attach(presenter) {
      presenterInstance = presenter;
      return () => {}
    },
    showGame(game) {
      render(<Game
        fails={game.fails}
        placeholders={game.placeholders}
        dispatchInputLetter={(letter) => presenterInstance.dispatchInputLetter(letter)} />)
    },
    showWinningGame(presenter, secretWord) {
      render(<WinningGame secretWord={secretWord} presenter={presenter} />)
    },
    showGameOver(presenter, secretWord) {
      render(<GameOver secretWord={secretWord} presenter={presenter} />)
    }
  }
}

export default UserInterfaceReactImpl;