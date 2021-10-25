import { State, div, h1 } from 'arsnl'

import Stage from './Stage'
import PauseButton from './PauseButton'
import Clock from './Clock'
import ResetButton from './ResetButton'
import Grid from './Grid'

export default ({ setTitle }) => {
    setTitle('Game of Life')
    const worldState = State({})
    const isPaused = State({ value: true })
    const time = State({ value: 0 })
    const resetCount = State({ value: 0 })

    const onReset = () => {
      worldState['0-0'] = {}
      time.value = 0
      resetCount.value += 1
    }

    return (
      Stage([
        h1('Game of Life'),
        div({
          style: {
            marginBottom: '10px',
          },
          render: [
            PauseButton(isPaused, time),
            Clock(time, isPaused),
            ResetButton(onReset, isPaused),
          ]
        }),
        Grid(worldState, time, isPaused, resetCount)
      ], isPaused)
  )
}
