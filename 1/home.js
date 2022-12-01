const fs = require('fs');

const elfsStr = fs.readFileSync('./input.txt', 'utf8').split('\n\n')
const elfsItems = elfsStr.map(elf => elf.split('\n').map(item => parseInt(item)))

const something = elfsItems.map(e => e.reduce((sum, a) => sum + a, 0))

function indexOfBiggest(something) {
    return max = Math.max(...something)
}

console.log(indexOfBiggest(something));
