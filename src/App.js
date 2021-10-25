import { div } from 'arsnl'

export default app => {
    return (
        div({
            render: [
                app.renderRoutes(),
            ],
        })
    )
}
