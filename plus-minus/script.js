'use strict'
const arr = [-4, 3, -9, 0, 4, 1];
let positive = 0;
let zeroes = 0;
let negative = 0;


for(let num of arr) {
    if (num > 0) {
        positive ++;
    } else if(num < 0) {
        negative++;
    } else {
        zeroes++;
    }
}

const numberOfEl = arr.length;
const positiveRatio = (positive / numberOfEl).toFixed(6);
const negativeRatio = (negative / numberOfEl).toFixed(6);
const zeroesRatio = (zeroes / numberOfEl).toFixed(6);

console.log(positiveRatio);
console.log(negativeRatio);
console.log(zeroesRatio);