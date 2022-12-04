const fs = require('fs');

const rucksacks = fs.readFileSync('./input.txt', 'utf8').split('\n')

const dividedRucksacks = rucksacks.map(compartments => {
    const size = compartments.length / 2
    const partOne = compartments.slice(0, size)
    const partOTwo = compartments.slice(size)
    return [partOne, partOTwo]
})

const duplicates = dividedRucksacks.map(line => {
    return checkForDuplicate(line[0], line[1])
})

const duplicateValues = duplicates.map(findValue)

console.log(duplicates)
console.log(duplicateValues)
console.log(duplicateValues.reduce((sum, val) => sum + val, 0))

function checkForDuplicate(partOne, partTwo) {
    for (let char of partOne) {
        if (partTwo.includes(char)) {
            return char
        }
    }
}

function findValue(item) {
    const code = item.charCodeAt(0)

    return code < 97 ? code - 38 : code - 96
}
