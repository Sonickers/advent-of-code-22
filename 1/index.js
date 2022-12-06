const fs = require('fs');

const elfsStr = fs.readFileSync('./input.txt', 'utf8').split('\n\n')
const elfsItems = elfsStr.map(elf => elf.split('\n').map(item => parseInt(item)))

const elfsSums = elfsItems.map(e => e.reduce((sum, a) => sum + a, 0)).sort((a, b) => a > b ? 1 : -1)


// Printing the highest Elfs Calories
console.log(Math.max(...elfsSums))

// Printing the sum of three highest Elves Calories
console.log(elfsSums.slice(-3).reduce((sum, a) => sum + a, 0))
