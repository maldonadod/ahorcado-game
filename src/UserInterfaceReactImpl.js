import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function render(view) {
  ReactDOM.render(view, document.getElementById('root'));
}

function toPlaceHolder(placeholder, i) {
  return (
    <span className="placeholder" key={i}>{placeholder}</span>
  )
}
function toFail(failingLetter, i) {
  return (
    <span className="failing-letter" key={i}>{failingLetter}</span>
  )
}
function GameContainer({children}) {
  return (
    <div className="game-container">
      {children}
    </div>
  )
}
function Game({ fails, placeholders }) {
  return (
    <GameContainer>
      <section>
        {placeholders.map(toPlaceHolder)}
        <p className="fallos">
          {fails.map(toFail)}
        </p>
      </section>
    </GameContainer>
  )
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
  return {
    attach(presenter) {
      function listener(e) {
        presenter.dispatchInputLetter(e.key)
      }
      document.addEventListener("keypress", listener)
      return () => {
        document.removeEventListener("keypress", listener)
      }
    },
    showGame(game) {
      render(<Game fails={game.fails} placeholders={game.placeholders} />)
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