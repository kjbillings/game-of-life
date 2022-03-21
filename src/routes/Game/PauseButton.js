import { button } from 'arsnl'

let interval
const PauseButton = (isPaused, time) => {
  return (
    button(() => ({
      render: isPaused.value ? 'Start' : 'Stop',
      onClick: () => {
        if (isPaused.value === true) {
          interval = setInterval(() => {
            time.value += 1
          }, 400)
        } else {
          clearInterval(interval)
        }
        isPaused.value = !isPaused.value
      }
    }), [ isPaused ])
  )
}

export default PauseButton
