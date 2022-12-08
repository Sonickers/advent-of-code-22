const fs = require('fs');

const valuesHash = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
}

const countersHash = {
  A: "B",
  B: "C",
  C: "A",
}

const antiCountersHash = {
  A: "C",
  B: "A",
  C: "B",
}

const guide = fs.readFileSync('./input.txt', 'utf8').split('\n')

let score = calcScore(guide)
console.log('Score:', score)

function calcScore(guide) {
  let sum = 0

  guide.forEach(line => {
    const [shape1, result] = line.split(" ")


    switch (result) {
      case "Y":
        sum += 3 + valuesHash[shape1]
        break
      case "X":
        sum += 0 + valuesHash[antiCountersHash[shape1]]
        break
      case "Z":
        sum += 6 + valuesHash[countersHash[shape1]]
        break
    }
  })

  return sum
}