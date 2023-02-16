/*An array contain some numbers, we want to increase its values by 3 times its current value. [2, 4, 5, 9, 3, -10, 1]. */

// const myArray = [2, 4, 5, 9, 3, -10, 1];
// const myNewArray = myArray.map(number => number * 20);
// console.log(myNewArray); 

// Output
// [6, 12, 15, 27, 9, -30, 3]


// const plusArr = [10, 20, 30, 40, 3];
// const addArr = plusArr.map(number => number + 3);
// console.log(addArr)
// // ---------------------------------------------------------

/* We have an array of fruits strings, convert them to uppercase. This is the array: [mango, pear, pawpaw, orange, banana]. */

// const fruits = ['mango', 'pear', 'pawpaw', 'orange', 'banana'];
// const fruitsArr = fruits.map(item => item.toUpperCase());
// console.log(fruitsArr);


// const fruitsArr = ['MANGO', 'PEAR', 'PAWPAW', 'ORANGE', 'BANANA'];
// const matunda = fruitsArr.map(item => item.toLowerCase());
// console.log(matunda);

// ---------------------------------------------------------

/* In a given array of students ages, multiply each age by it’s index and then add 1 to it */

// const ages = [4, 10, 5, 7, 9];
// const newAges = ages.map((age, index) => (age * index) + 1)
// console.log(newAges);

// -------------------------------------------------------

/* Capitalize the first letter of all names in an array of employees, and add the index to the new names. */

// const employees = ['ben', 'mike', 'anna', 'derryck', 'sophia'];

// const empUpdate = employees.map(function(name, index){
//     return name[0].toUpperCase() + name.slice(1) + index;
// });
// console.log(empUpdate);
// -------------------------------------------------

/*Extract the age property from an array of objects which consist of lecturers and their ages. Lecturers = [{ name: ‘Jake’, age: 34 }, { name: ‘Betty’, age: 28 }, { name: ‘Francisca’, age: 45 }, { name: ‘Tapper’, age: 40 }]. */

// let lecturers = [{ name: 'Jake', age: 34 }, { name: 'Betty', age: 28 }, { name: 'Francisca', age: 45 }, { name: 'Tapper', age: 40 }];
// // let lecturersAge = lecturers.map(age => age.age);

//    let ageArr = lecturers.map(age => age.age);

// console.log(ageArr);

// X = [{y: 'z'}, {y: 'D'}, {}, {}];
//  let finders =  X.map(y => y.y); 
// Target the key in your params to define the value that it pairs.
//   console.log(finders); 
// In this case finders is the new array that is returned by the map().
// --------------------------------------------------------------------------

/* Check if the current item is the last item in the list of an array. If it is not, we will access the next item and subtract it from the current item. If it is the last, we just return it. Given array = [17, 5, -4, 9, -10]. */

// P - An array of numbers; negative and positive
// R - Return the last item in the array
// E - [17, 5, -4, 9, -10] should return [-10]
// P - if current item == last item in the array { return the last item }
//     if current item !== last item in the array { current item - next item }

// const oldArray = [17, 5, -4, 9, -10];
// const newArray = oldArray.map(function(item, index, array){
//   let nextItem = index + 1 < array.length ? array[index + 1] : 0;
//      return item - nextItem;
//   });
  // console.log(item);
  // console.log(index);
  // console.log(oldArray[oldArray.length - 1]);
  // if (item !== oldArray[oldArray.length - 1]) {
  
  // };


// currentItem - nextItem
// 17 - 5 = 12
// 5 - -4 = 9
// -4 - 9 = -13
// 9 - -10 = 19
// -10 = -10
 // console.log(newArray);
// Output 
// [12, 9, -13, 19, -10]
// 
// -----------------------------------------------------


/*Convert the following strings of numbers in the array into whole numbers. [‘10’, ‘15.3’, ‘35’, ‘8.6’, ‘22’]. */ 

// let strArray = ['10', '15.3', '35', '8.6', '22'];
// let wholeArr = strArray.map(item => Math.floor(Number(item)));
// console.log(wholeArr);

// ---------------------------------------------------------
/*For this example, we are given an array of numbers, arrange them in a descending order and add the index of each element. */
// 
// const numsArr = [5, 8, 10, 4, 9];
// const descendArray = numsArr.map((number, index) => number + index).sort((a, b) => b - a);
// console.log(descendArray);

// const numsArr = [50, 80, 10, 40, 90];
// const descendArray = numsArr.map((number, index) => number + index);
// console.log(descendArray);

// ----------------------------------------------


/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]
 */ 

// function digitize(n) {
//   return n.toString().split("").reverse().map(Number)
// };
// console.log(digitize);

const random = 35231;
const newArr = random.toString().split('').reverse().map(Number);
console.log(newArr);