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

  const underpopulated = isLiving && livingNeighborCount < 2
  const overpopulated = livingNeighborCount > 3
  const reproducing = !isLiving && livingNeighborCount === 3

  const certainDeath = (
    underpopulated
    || overpopulated
  )

  const weAreExpecting = (
    reproducing
  )

  setTimeout(() => { // to make sure it waits for its neighbors first
    if (certainDeath) {
      death(id, el, livingUnits)
    }
    if (weAreExpecting) {
      birth(id, el, livingUnits)
    }
  }, 30)
}
