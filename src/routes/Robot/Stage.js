import { div } from 'arsnl'

export default (render) => {
    return (
      div({
        style: {
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: '#ffffff',
          backgroundColor: '#000000',
        },
        render,
      })
  )
}
