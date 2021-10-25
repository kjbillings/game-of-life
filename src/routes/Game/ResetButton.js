import { span, button } from 'arsnl'

const ResetButton = (onClick, isPaused) => {
  return (
    span(() => ({
      render: (
        button({
          render: 'Clear',
          disabled: isPaused.value !== true || null,
          onClick,
        })
      )
    }), [ isPaused ])
  )
}

export default ResetButton
