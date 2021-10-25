import { r } from 'arsnl'

import { UNIT_SIZE } from '../settings'

const Unit = ({ style, ...rest }, title) => (
  r({
      tag: 'svg:rect',
      height: `${UNIT_SIZE}px`,
      width: `${UNIT_SIZE}px`,
      style: {
        ...style,
        visibility: 'visible'
      },
      title,
      ...rest
  })
)

export default Unit
