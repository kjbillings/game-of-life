import { State, span } from 'arsnl'

import { CLOCK_COLOR } from './settings'

export const ticker = time => (
  setInterval(() => {
    time.value += 1
  }, 300)
)

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
