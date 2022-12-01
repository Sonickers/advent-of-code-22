const fs = require('fs');

const elfsStr = fs.readFileSync('./input.txt', 'utf8').split('\n\n')
const elfsItems = elfsStr.map(elf => elf.split('\n').map(item => parseInt(item)))

const elfsSums = elfsItems.map(e => e.reduce((sum, a) => sum + a, 0))

const maxElf = Math.max(...elfsSums)

console.log(maxElf);
