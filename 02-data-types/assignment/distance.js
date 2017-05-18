// this is the original stuff...trying the extra credit..
// apparently you don't need to list const 4 times, just do const x1, x2, y1, y2


const x1 = 1
const x2 = 10
const y1 = 3
const y2 = 15

const deltaX = x2 - x1
const deltaY = y2 - y1

const xSum = Math.pow(deltaX, 2)
const ySum = Math.pow(deltaY, 2)

const deltaSum = xSum + ySum
const distance = Math.sqrt(deltaSum)

console.log(distance);

console.log('process argv here YOYOYOYO', process.argv);

//bah would love to review the below!
//
// process.argv([0], [1], [2], [3])
//
// const x1 = process.argv[0];
// const x2 = process.argv[1];
// const y1 = process.argv[2];
// const y2 = process.argv[3];
//
// deltaX = x1 - x2
// deltaY = y1 - y2
//
// Math.pow(deltaX, 2)
// Math.pow(deltaY, 2)
//
// deltaSum = deltaX + deltaY
// Math.sqrt(deltaSum)
//
// console.log(deltaSum);
