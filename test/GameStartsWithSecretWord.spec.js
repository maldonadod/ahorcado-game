const InitGame = require("./InitGame");

test("Game should provide placeholders equals to the amount of letters of the secret word", testGameStarts)

function testGameStarts() {

  InitGame({ secretWord: "gato" }).verify((presenter, view) => {
    expect(view.showGame).toHaveBeenCalledWith({
      fails: [],
      placeholders: ["_", "_", "_", "_"]
    }, presenter)
  })
}