import { LIVING_COLOR, DEAD_COLOR } from '../settings'
import { getNeighbors, getLivingNeighborCount } from './neighbors'

export const updateCell = (id, el, bool, livingUnits) => {
  livingUnits[id] = bool
  el.style.fill = bool ? LIVING_COLOR : DEAD_COLOR
}

export const death = (id, el, livingUnits) => {
  updateCell(id, el, false, livingUnits)
}

export const birth = (id, el, livingUnits) => {
  updateCell(id, el, true, livingUnits)
}

export const applyConwaysRules = (id, el, livingUnits) => {
  const neighbors = getNeighbors(id)
  const isLiving = livingUnits[id] === true
  const livingNeighborCount = getLivingNeighborCount(neighbors, livingUnits)

  const underpopulation = isLiving && livingNeighborCount < 2
  const overpopulation = livingNeighborCount > 3
  const reproduction = !isLiving && livingNeighborCount === 3

  setTimeout(() => { // to make sure it waits for its neighbors first
    if (underpopulation || overpopulation) {
      death(id, el, livingUnits)
    }
    if (reproduction) {
      birth(id, el, livingUnits)
    }
  }, 150)
}
