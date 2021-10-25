import { State, div, h1, img } from 'arsnl'

import Stage from './Stage'
import PauseButton from './PauseButton'
import Clock from './Clock'
import ResetButton from './ResetButton'
import PresetDropdown from './PresetDropdown'
import Grid from './Grid'

export default ({ setTitle }) => {
    setTitle('Game of Life')
    const selectedPreset = State({ name: '' })
    const worldState = State({})
    const isPaused = State({ value: true })
    const time = State({ value: 0 })
    const resetCount = State({ value: 0 })

    const onReset = () => {
      worldState['0-0'] = {}
      time.value = 0
      resetCount.value += 1
    }
    const onChange = (e) => {
      selectedPreset.name = e.target.value
      onReset()
      setTimeout(() => {
        selectedPreset.name = ''
      }, 10)
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
            PresetDropdown(onChange, isPaused),
          ]
        }),
        // img({
        //   src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Game_of_life_Simkin_glider_gun.svg/749px-Game_of_life_Simkin_glider_gun.svg.png',
        //   style: {
        //     width: '368px',
        //     position: 'absolute',
        //     marginLeft: '-58px',
        //     marginTop: '-132px',
        //     opacity: 0.1,
        //     pointerEvents: 'none',
        //   }
        // }),
        Grid(worldState, time, isPaused, resetCount, selectedPreset)
      ], isPaused)
  )
}
