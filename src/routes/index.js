import Game from './Game'

const routes = {
    "/": Game,
    "/404": ({ redirect }) => redirect('/'),
}

export default routes
