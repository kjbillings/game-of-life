import { subscribe } from 'arsnl'

import { getUnitPx } from '../services/formatters'
import { getId } from '../services/id'
import { death, birth, applyConwaysRules } from '../services/rules-of-life'
import { UNITS_TALL, UNITS_WIDE } from '../settings'

const draw = (worldState, time, isPaused, isClicked) => {
  const livingUnits = {}
  for (var y = 0; y < UNITS_TALL; y++) {
    for (var x = 0; x < UNITS_WIDE; x++) {
      const id = getId(x,y)
      worldState[id] = {
        id,
        x: getUnitPx(x),
        y: getUnitPx(y),
        onClick: function () {
          if (isPaused.value) {
            const isLiving = livingUnits[id] === true
            if (isLiving) {
              death(id, this, livingUnits)
            } else {
              birth(id, this, livingUnits)
            }
          }
        },
        onmousedown: () => {
          if (isPaused.value) {
            isClicked = true
          }
        },
        onmouseup: () => {
          if (isPaused.value) {
            isClicked = false
          }
        },
        onmouseenter: function() {
          if(isPaused.value && isClicked) {
            birth(id, this, livingUnits)
          }
        },
        onLoad: (e) => {
          subscribe(time, () => {
            if (!isPaused.value) {
              applyConwaysRules(id, e, livingUnits)
            }
          })
        }
      }
    }
  }
}

export default draw
