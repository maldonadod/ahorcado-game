const removeTildes = require("../src/domain/removeTildes")

test("should remove tildes from words", testRemoveTildes("época", "epoca"))
test("should remove tildes from words", testRemoveTildes("águila", "aguila"))
test("should remove tildes from words", testRemoveTildes("sí", "si"))
test("should remove tildes from words", testRemoveTildes("canción", "cancion"))
test("should remove tildes from words", testRemoveTildes("tú", "tu"))

function testRemoveTildes(word, expected) {
  return () => {
    const actual = removeTildes(word);
    expect(actual).toEqual(expected)
  }
}