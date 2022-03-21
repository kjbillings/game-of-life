import { span, select, option } from 'arsnl'

import * as presets from './presets'

const PresetButton = (onChange, isPaused) => {
  return (
    span(() => ({
      style: {
        margin: '0 10px',
      },
      render: (
        select({
          value: '',
          render: [
            option({
              value: '',
              render: 'Select a preset',
            }),
            Object.keys(presets).map(key => (
              option({
                render: key,
              })
            )),
          ],
          disabled: isPaused.value !== true || null,
          onChange,
        })
      )
    }), [ isPaused ])
  )
}

export default PresetButton
