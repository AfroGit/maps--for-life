/*An array contain some numbers, we want to increase its values by 3 times its current value. [2, 4, 5, 9, 3, -10, 1]. */ 

const myArray = [2, 4, 5, 9, 3, -10, 1];
const myNewArray = myArray.map(number => number * 20);
console.log(myNewArray); 

// Output
// [6, 12, 15, 27, 9, -30, 3]


const plusArr = [10, 20, 30, 40, 3];
const addArr = plusArr.map(number => number + 3);
console.log(addArr)
// ---------------------------------------------------------

/*We have an array of fruits strings, convert them to uppercase. This is the array: [mango, pear, pawpaw, orange, banana]. */ 

// const fruits = ['mango', 'pear', 'pawpaw', 'orange', 'banana'];
// const fruitsArr = fruits.map(item => item.toUpperCase());
// console.log(fruitsArr);

// Output
const fruitsArr = ['MANGO', 'PEAR', 'PAWPAW', 'ORANGE', 'BANANA'];
const matunda = fruitsArr.map(item => item.toLowerCase());
console.log(matunda);