import { extract, svg } from 'arsnl'
import { isEmpty } from 'lodash'

import { getId } from '../services/id'
import { getUnit, getUnitPx } from '../services/formatters'
import {
  UNITS_WIDE,
  UNITS_TALL,
  STROKE_WIDTH,
  DEAD_COLOR,
  BACKGROUND_COLOR,
  LIVING_COLOR,
} from '../settings'
import Unit from './Unit'
import draw from './draw'

const viewBox = `0 0 ${getUnit(UNITS_WIDE)} ${getUnit(UNITS_TALL)}`
const height = getUnitPx(UNITS_TALL)
const width = getUnitPx(UNITS_WIDE)

const Grid = (worldState, time, isPaused, resetCount) => {
  let isClicked = false
  return (
    svg(() => {
      if (isEmpty(worldState[getId(0,0)])) {
        draw(worldState, time, isPaused, isClicked)
      }
      return {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid meet",
        viewBox,
        height,
        width,
        stroke: BACKGROUND_COLOR,
        'stroke-width': STROKE_WIDTH,
        fill: DEAD_COLOR,
        render: (
          Object.keys(extract(worldState)).map(id => {
            return Unit(worldState[id], id)
          })
        ),
        onmouseout: () => {
          isClicked = false
        },
      }
    }, [ resetCount ])
  )
}

export default Grid
