import { div } from 'arsnl'

import { DEAD_COLOR, BACKGROUND_COLOR, TEXT_COLOR } from './settings'

export default (render) => {
    return (
      div({
        style: {
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: TEXT_COLOR,
          backgroundColor: BACKGROUND_COLOR,
        },
        render,
      })
  )
}
