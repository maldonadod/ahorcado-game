const InitGame = require("./InitGame");

test.only("Game should provide placeholders equals to the amount of letters of the secret word", testGameStarts)

function testGameStarts() {

  InitGame({ secretWord: "elefante" }).verify((presenter, view) => {
    presenter.dispatchInputLetter("E")
    expect(view.showGame).toHaveBeenCalledWith({
      fails: [],
      placeholders: ["E", "_", "E", "_", "_", "_", "_", "E"]
    }, presenter)
  })
}