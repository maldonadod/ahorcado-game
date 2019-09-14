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
function Game({ fails, placeholders }) {
  return (
    <div>
      <section>
        <h3>Failing letters: [{fails.map(toFail)}]</h3>
      </section>
      {placeholders.map(toPlaceHolder)}
    </div>
  )
}
function WinningGame({ presenter, secretWord }) {
  return (
    <div>
      <h2>YOU WON, THE WORD WAS: {secretWord}</h2>
      <button onClick={() => presenter.restartGame()}>Play Again</button>
    </div>
  )
}
function GameOver({ presenter, secretWord }) {
  return (
    <div>
      <h2>YOU LOOSE, THE WORD WAS: {secretWord}</h2>
      <button onClick={() => presenter.restartGame()}>Play Again</button>
    </div>
  )
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