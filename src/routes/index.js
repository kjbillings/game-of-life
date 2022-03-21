import Holon from './Holon'
import Game from './Game'
import Robot from './Robot'
import Deck from './Deck'

const routes = {
    "/": Deck,
    "/robot": Robot,
    "/holon": Holon,
    "/game-of-life": Game,
    "/404": ({ redirect }) => redirect('/'),
}

export default routes
