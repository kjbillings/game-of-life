import { State, span } from 'arsnl'

import { CLOCK_COLOR } from './settings'

const Clock = (time, isPaused) => {
  return (
    span(() => ({
      style: {
        display: 'inline-block',
        margin: '0 10px',
        color: CLOCK_COLOR,
      },
      render: `${time.value} Ticks`
    }), [ time ])
  )
}

export default Clock
