const fs = require('fs');

const rucksacks = fs.readFileSync('./input.txt', 'utf8').split('\n')

const groups = []
for (let i = 0; i < rucksacks.length; i += 3) {
    groups.push(rucksacks.slice(i, i + 3))
}

const duplicates = groups.map(group => {
    const [partOne, partTwo, partThree] = group
    return checkForDuplicate(partOne, partTwo, partThree)
})

const duplicateValues = duplicates.map(findValue)

console.log(duplicates)
console.log(duplicateValues)
console.log(duplicateValues.reduce((sum, val) => sum + val, 0))

function checkForDuplicate(partOne, partTwo, partThree) {
    for (let char of partOne) {
        if (partTwo.includes(char) && partThree.includes(char)) {
            return char
        }
    }
}

function findValue(item) {
    const code = item.charCodeAt(0)

    return code < 97 ? code - 38 : code - 96
}