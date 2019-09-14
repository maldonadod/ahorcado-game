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

function GameComponent({ fails, placeholders, presenter}) {
  return (
    <div>
      <section>
        <h3>Failing letters: [{fails.map(toFail)}]</h3>
      </section>
      {placeholders.map(toPlaceHolder)}
    </div>
  )
}

const view = {
  showGame(game, presenter) {
    render(<GameComponent fails={game.fails} placeholders={game.placeholders} presenter={presenter} />)
  },
  showWinningGame(presenter) {
    render((
      <div>
        YOU WON
        <button onClick={() => presenter.restartGame()}>Play Again</button>
      </div>
    ))
  },
  showGameOver(presenter, secretWord) {
    render((
      <div>
        YOU LOOSE, THE WORD WAS: {secretWord}
        <button onClick={() => presenter.restartGame()}>Play Again</button>
      </div>
    ))
  }
}

export default view;