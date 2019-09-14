import randomWords from "random-spanish-words"
import removeTildes from "./removeTildes"

function getWord() {
  return removeTildes(randomWords())
}

export default getWord