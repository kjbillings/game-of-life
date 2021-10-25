import { UNITS_TALL, UNITS_WIDE } from '../settings'
import { getId, deconstructId } from './id'

export const getLivingNeighborCount = (neighbors, livingUnits) => {
  let count = 0
  if (livingUnits[neighbors.nw] === true) count += 1
  if (livingUnits[neighbors.n] === true) count += 1
  if (livingUnits[neighbors.ne] === true) count += 1
  if (livingUnits[neighbors.e] === true) count += 1
  if (livingUnits[neighbors.se] === true) count += 1
  if (livingUnits[neighbors.s] === true) count += 1
  if (livingUnits[neighbors.sw] === true) count += 1
  if (livingUnits[neighbors.w] === true) count += 1
  return count
}

export const getNeighbors = (id) => {
  const {x,y} = deconstructId(id)
  const yN = y === 0 ? UNITS_WIDE - 1 : y - 1
  const xE = x === UNITS_TALL - 1 ? 0 : x + 1
  const yS = y === UNITS_WIDE - 1 ? 0 : y + 1
  const xW = x === 0 ? UNITS_TALL - 1 : x - 1
  return {
    nw: getId(xW, yN),
    n:  getId(x, yN),
    ne: getId(xE, yN),
    e:  getId(xE, y),
    se: getId(xE, yS),
    s:  getId(x, yS),
    sw: getId(xW, yS),
    w:  getId(xW, y),
  }
}
