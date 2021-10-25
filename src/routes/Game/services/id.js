const DELIMITER = '-'

export const getId = (x, y) => `${x}${DELIMITER}${y}`

export const deconstructId = id => {
  const parts = id.split(DELIMITER)
  return {
    x: parseInt(parts[0]),
    y: parseInt(parts[1]),
  }
}
