const radianToDegrees = radian => {
  return radian * (180 / Math.PI)
}

const degreesToRadians = degrees => {
  return degrees * (Math.PI / 180)
}

console.log("radian")
console.log(radianToDegrees(0))
console.log(radianToDegrees(Math.PI / 4))
console.log(radianToDegrees(Math.PI / 2))
console.log(radianToDegrees(Math.PI))
console.log(radianToDegrees((3 * Math.PI) / 2))
console.log(radianToDegrees(2 * Math.PI))

console.log("degrees")
console.log(degreesToRadians(0))
console.log(degreesToRadians(45))
console.log(degreesToRadians(90))
console.log(degreesToRadians(180))
console.log(degreesToRadians(270))
console.log(degreesToRadians(360))
