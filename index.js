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

/*We have an array of fruits strings, convert them to uppercase. This is the array: [mango, pear, pawpaw, orange, banana]. */ 

// const fruits = ['mango', 'pear', 'pawpaw', 'orange', 'banana'];
// const fruitsArr = fruits.map(item => item.toUpperCase());
// console.log(fruitsArr);


// const fruitsArr = ['MANGO', 'PEAR', 'PAWPAW', 'ORANGE', 'BANANA'];
// const matunda = fruitsArr.map(item => item.toLowerCase());
// console.log(matunda);

// ---------------------------------------------------------

/*In a given array of students ages, multiply each age by it’s index and then add 1 to it */ 

// const ages = [4, 10, 5, 7, 9];
// const newAges = ages.map((age, index) => (age * index) + 1)
// console.log(newAges);

// -------------------------------------------------------

/*Capitalize the first letter of all names in an array of employees, and add the index to the new names. */ 

// const employees = ['ben', 'mike', 'anna', 'derryck', 'sophia'];

// const empUpdate = employees.map(function(name, index){
//     return name[0].toUpperCase() + name.slice(1) + index;
// });
// console.log(empUpdate);