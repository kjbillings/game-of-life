import { UNIT_SIZE } from '../settings'

export const getUnit = (u) => u * UNIT_SIZE
export const getUnitPx = (u) => `${getUnit(u)}px`
