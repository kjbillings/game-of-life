import { App, Router } from 'arsnl'
import rootComponent from './App'
import routes from './routes'
import './index.scss'

new App({
    id: 'app-root',
    router: new Router(routes),
    title: 'KJB',
    component: rootComponent,
})
