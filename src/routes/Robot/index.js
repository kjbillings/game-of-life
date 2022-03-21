import { State, div, h1, img } from 'arsnl'

import Stage from './Stage'
import Unit from './Unit'

export default ({ setTitle }) => {
    setTitle('Robot')
    return (
      Stage([
        Unit()
      ])
  )
}
