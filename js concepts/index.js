// const number = 20;
// let binaryNumber = number.toString(2);
// const list = binaryNumber.split('1');
// let actualList = [];
// if (list.length) {
//     list.pop();
//     actualList = list.filter(el => el !== '');
// }

// if (actualList.length) {
//     console.log(Math.max(...actualList.map(el => el.length)));
//     //return  Match.max(...actualList.map(el => el.length));
// } else {
//     //return 0;
// }


// const arr = [1, 2, 3];
// const maxNumber = Math.max(...arr);
// smallestPositiveInt = -1;
// for (let i = 1; i < maxNumber; i++) {
//     if(arr.indexOf(i) === -1) {
//         smallestPositiveInt = i;
//     }
// }

// if(smallestPositiveInt === -1 && maxNumber > 0) {
//     smallestPositiveInt = maxNumber + 1;
// } else if(smallestPositiveInt === -1){
//     smallestPositiveInt = 1;
// }
// console.log(smallestPositiveInt);

// const str = '';
// let output = -1;
// if(str.includes('aaa')) {
//     output = -1;
// } else {
//     const arr = str.split('');
//     const remainingLetters = arr.filter(el => el !== 'a').length;
//     const numberOfa = arr.length - remainingLetters;
//     numberOfInsertion = (remainingLetters + 1) * 2;
//     output = Math.abs(numberOfInsertion - numberOfa);
// }

// console.log(output);

const str = '0';
const arr = [];
for(let i = 0; i < str.length-1; i++) {
    arr.push(+str.slice(i, i+2));
}
let output = arr.length ? Math.max(...arr) : 0;
console.log(output);



let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user);
  user.sizes.height = 170;
  console.log(clone);


