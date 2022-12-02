const fs = require('fs');

const valuesHash = {
  X: 1,
  Y: 2,
  Z: 3,

  A: 1,
  B: 2,
  C: 3,
}

const guide = fs.readFileSync('./input.txt', 'utf8').split('\n')

let score = calcShapeSum(guide) + calcWinsSum(guide)
console.log('Score:', score)

function calcShapeSum(guide) {
  let sum = 0
  guide.forEach(line => {
    const shape = line.split(" ")[1]
    sum += valuesHash[shape]
  })

  return sum
}

function calcWinsSum(guide) {
  let sum = 0

  guide.forEach(line => {
    const [shape1, shape2] = line.split(" ")

    if (valuesHash[shape1] === valuesHash[shape2]) {
      sum += 3
    }

    if (
      (shape1 === 'A' && shape2 === 'Y')
      || (shape1 === 'B' && shape2 === 'Z')
      || (shape1 === 'C' && shape2 === 'X')
    ) {
      sum += 6
    }
  })

  return sum
}