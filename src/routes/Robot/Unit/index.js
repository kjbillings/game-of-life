import { div, State } from 'arsnl'

const maxColor = 255
const maxOpacity = 1
const minOpacity = 0

const getRandom = () => {
  var num = Math.floor(Math.random()*100) + 1; // this will get a number between 1 and 99;
  num *= Math.round(Math.random()) ? 1 : -1; // this will add minus sign in 50% of cases
  return num
}

const breathe = (spirit) => {
  const o = spirit.breath > 0.5 ? 0.5 : 1
  setTimeout(() => {
    spirit.breath = o * spirit.energy
    breathe(spirit)
  }, spirit.ageRate * 2)
}

const age = (spirit) => {
  setTimeout(() => {
    spirit.energy = spirit.energy - 0.01
    age(spirit)
  }, spirit.ageRate)
}

const live = (spirit) => {
  setTimeout(() => {
    spirit.negative = 255
    spirit.positive = 255
    spirit.nerves = 255
    spirit.energy = 1
    spirit.breath = 1
  }, spirit.ageRate)

  breathe(spirit)
  age(spirit)
  window.spirit = spirit
}

const Unit = () => {
  const spirit = State({
    negative: 0, // negative
    positive: 0, // positive
    nerves: 0, // intensity
    breath: 0,
    energy: 0, // energy
    ageRate: 2000,
    x: getRandom(),
    y: getRandom(),
  })
  live(spirit)
  return div(() => ({
    style: {
      marginTop: `${spirit.x}px`,
      marginLeft: `${spirit.y}px`,
      position: 'absolute',
      borderRadius: '50%',
      height: `${20 * spirit.energy}px`,
      width: `${20 * spirit.energy}px`,
      background: `rgba(${spirit.negative}, ${spirit.positive}, ${spirit.nerves}, ${spirit.breath})`,
      transition: `all ${spirit.ageRate}ms ease-out`,
    }
  }), [ spirit ])
}

export default Unit
