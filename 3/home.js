const fs = require('fs');

const rucksacks = fs.readFileSync('./input.txt', 'utf8').split('\n')

const dividedRucksacks = rucksacks.map(compartments => {
    const size = compartments.length / 2
    const partOne = compartments.slice(0, size)
    const partOTwo = compartments.slice(size)
    return [partOne, partOTwo]
}) 

function checkForDuplicate(partOne, partTwo) {
    for (let char of partOne) {
        if (partTwo.includes(char)) {
            return char
        }
    }
}

dividedRucksacks.forEach(line => {
   console.log(checkForDuplicate(line[0], line[1])) 
})