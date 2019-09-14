function removeTildes(word) {
  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}
module.exports = removeTildes