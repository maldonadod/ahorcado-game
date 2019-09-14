const InitGame = require("./InitGame");

test("asd", test4)
test("asd", test5)
test("asd", test6)
test("asd", test7)
test("asd", test8)

function test4() {

  InitGame({ secretWord: "gato" }).verify((presenter, view) => {
    
    presenter.dispatchInputLetter("A")

    expect(view.showGame).toHaveBeenCalledWith({
      fails: [],
      placeholders: ["_", "A", "_", "_"]
    }, presenter)
  })
}
function test5() {

  InitGame({ secretWord: "gato" }).verify((presenter, view) => {

    presenter.dispatchInputLetter("A")
    presenter.dispatchInputLetter("B")

    expect(view.showGame).toHaveBeenCalledWith({
      fails: ["B"],
      placeholders: ["_", "A", "_", "_"]
    }, presenter)
  })
}
function test6() {

  InitGame({ secretWord: "gato" }).verify((presenter, view) => {

    presenter.dispatchInputLetter("A")
    presenter.dispatchInputLetter("B")
    presenter.dispatchInputLetter("H")
    presenter.dispatchInputLetter("T")

    expect(view.showGame).toHaveBeenCalledWith({
      fails: ["B", "H"],
      placeholders: ["_", "A", "T", "_"]
    }, presenter)
  })
}
function test7() {

  InitGame({ secretWord: "gato" }).verify((presenter, view) => {

    presenter.dispatchInputLetter("A")
    presenter.dispatchInputLetter("B")
    presenter.dispatchInputLetter("H")
    presenter.dispatchInputLetter("T")
    presenter.dispatchInputLetter("O")

    expect(view.showGame).toHaveBeenCalledWith({
      fails: ["B", "H"],
      placeholders: ["_", "A", "T", "O"]
    }, presenter)
  })
}
function test8() {

  InitGame({ secretWord: "gato" }).verify((presenter, view) => {

    presenter.dispatchInputLetter("A")
    presenter.dispatchInputLetter("B")
    presenter.dispatchInputLetter("H")
    presenter.dispatchInputLetter("T")
    presenter.dispatchInputLetter("O")
    presenter.dispatchInputLetter("G")

    expect(view.showWinningGame).toHaveBeenCalled()
  })
}