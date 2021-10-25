import { button } from 'arsnl'

import { ticker } from './Clock'

let interval
const PauseButton = (isPaused, time) => {
  return (
    button(() => ({
      render: isPaused.value ? 'Start' : 'Stop',
      onClick: () => {
        if (isPaused.value === true) {
          interval = ticker(time)
        } else {
          clearInterval(interval)
        }
        isPaused.value = !isPaused.value
      }
    }), [ isPaused ])
  )
}

export default PauseButton
