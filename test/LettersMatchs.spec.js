const replaceLetterInPlaceholders = require("../src/domain/replaceLetterInPlaceholders")

test("should replace placeholders by the letter where correspond", testLetters)

function testLetters() {

  const letters = ["a", "e", "a"]
  const placeholders = ["_", "_", "_"]
  const letter = "a"
  const expected = ["a", "_", "a"]
  const actual = replaceLetterInPlaceholders(letters, placeholders, letter)
  
  expect(actual).toEqual(expected)
  
  expect(replaceLetterInPlaceholders(letters, actual, "e")).toEqual(letters)
}