const SecretWord = require("../src/domain/SecretWord")

describe("WordShould", WordShould)

function WordShould() {
	it("should render providing fails along with placeholders for each letter in it", ShouldRender)
	it("should add letter that doesnt match with any letter in it", ShouldFails)
	it("should discover the right letter when guess", ShouldGuess)
}

function Verify(word, verify) {
	const presenter = {
		showGame: jest.fn()
	}
	return verify(presenter, new SecretWord(word, "_"));
}

function ShouldRender() {
	Verify("perro", (presenter, word) => {
		word.render(presenter);
		expect(presenter.showGame).toHaveBeenCalledWith({
			placeholders: ["_", "_", "_", "_", "_"],
			fails: []
		})
	})
}

function ShouldFails() {
	Verify("perro", (presenter, word) => {

		word
			.tryLetter("Z")
			.tryLetter("H")
			.tryLetter("I")
			.render(presenter)

		expect(presenter.showGame).toHaveBeenCalledWith({
			placeholders: ["_", "_", "_", "_", "_"],
			fails: ["Z", "H", "I"]
		})
	})
}

function ShouldGuess() {
	Verify("perro", (presenter, word) => {

		word
			.tryLetter("H")
			.tryLetter("I")
			.tryLetter("O")
			.tryLetter("P")
			.tryLetter("L")
			.render(presenter)

		expect(presenter.showGame).toHaveBeenCalledWith({
			placeholders: ["P", "_", "_", "_", "O"],
			fails: ["H", "I", "L"]
		})
	})
}