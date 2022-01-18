const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
//maybe use sort?
//this sort arrangement didn't work
//looks like it should be a-b not b-a
  // arr.sort((a, b) => b - a);
  // console.log(arr);
}
//maybe use filter?
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//maybe not though because then I wouldn't use a loop

//maybe I use an if statement if i>i+1 return i else return i+1
//this works when the array has been sorted.

//my JANKY solution works for array & arry2 but not array3
//uses a for loop
array.sort(function(a, b){
           return a - b;
       });
for (var i = 0; i < array.length; i++) {
  if (array[i]>array[i+1]) {
    console.log(array[i]);
  }
  else if (typeof array[i+1]==="undefined") {
    console.log(array[i]);
  }
}

//andrei's elegant solution
function biggestNumberInArray(arr){
  let highest=0;
  for (var i = 0; i < arr.length; i++) {
    if (highest<arr[i]){
      highest=arr[i];
    }
  }
  return highest;
}

//solving using forEach loop
function biggestNumberInArray2(arr) {
  array.sort(function(a, b){
             return a - b;
         });
  array.forEach(func);

  function func (arr){
    if (array[i]>array[i+1]) {
      console.log(array[i]);
    }
    else if (typeof array[i+1]==="undefined") {
      console.log(array[i]);
    }}

function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

}
