export const STATES = {
  Idle: {key: 'Idle', loop: true},
  Walking: {key: 'Walking', loop: true},
  Running: {key: 'Running', loop: true},
  Dance: {key: 'Dance', loop: true},
  Death: {key: 'Death', loop: false},
  Sitting: {key: 'Sitting', loop: false},
  Standing: {key: 'Standing', loop: false},
} as const;

const Controller = () => {
  const onClickState = (state: keyof typeof STATES) => {
    const changeState = new CustomEvent('changeState', {
      detail: {
        state,
        loop: STATES[state].loop,
      }
    })
    window.dispatchEvent(changeState)
  }

  return (
    <>
      <div
        style={{
          position: 'absolute',
          margin: '1rem',
          top: 0,
          color: 'white'
        }}
        onClick={e => e.preventDefault()}
      >
        <button onClick={() => onClickState(STATES.Idle.key)}>Idle</button>
        <button onClick={() => onClickState(STATES.Walking.key)}>Walking</button>
        <button onClick={() => onClickState(STATES.Running.key)}>Running</button>
        <button onClick={() => onClickState(STATES.Dance.key)}>Dance</button>
        <button onClick={() => onClickState(STATES.Death.key)}>Death</button>
        <button onClick={() => onClickState(STATES.Sitting.key)}>Sitting</button>
        <button onClick={() => onClickState(STATES.Standing.key)}>Standing</button>
      </div>
    </>
  )
}

export default Controller;
