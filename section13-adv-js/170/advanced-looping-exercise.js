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
//this solution kinda works. Problem is, it holds highest value because of where
//let highest =0 is defined.
function biggestNumberInArray2(arr){
  arr.forEach(myFunc);
  return highest;
}
let highest=0;
function myFunc (i){
    if(highest<i){
      highest=i;
    }
  }

//my solution imitating Andrei's
function biggestNumberInArray2(arr){
  let highest=0;
  arr.forEach(myFunc)
  return highest;
}

function myFunc (i){
    if(highest<i){
      highest=i;
    }
  }

//Andrei's solution:
function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach(item => {
    if (highest < item) {
      highest = item;
    }
  })
  return highest;
}

//andreis forEach function in trad notation
function biggestNumberInArray2(arr) {
  let highest = 0;
  arr.forEach(hisFunc)
  return highest;
}
  function hisFunc (item) {
    if (highest < item) {
      highest = item;
    }}


//my solution. Worked on first try!!!
function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr){
    if (highest < item) {
      highest = item;
    }
  }
return highest;
}



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}
//og function
function checkBasket(basket, lookingFor) {

}

//andrei's solution
function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      return `${lookingFor} is in your basket`
    }
  }
  return 'that does not exist in your basket'
}

//my try @ andrei's solution:
//when I was solving on my own I didn't realize I could have item
//in the for in statement in addition to lookingFor!
function checkBasket(basket, lookingFor) {
  for(item in basket){
    if(item===lookingFor){
      return `${lookingFor} is in your basket!`);
    }
    }
      return `${lookingFor} is not in your basket. You should probs buy it!!!`
  }





//1st try report value of key if found
function checkBasket(basket,x) {
  for (let x in basket){
    if (basket[x]>0){
    return "In your basket! You have " + basket[x] + "in your basket";
  }
  else {
    return "You should probs buy this!";
  }
  }
}

//logs 1,2,100
for (let x in amazonBasket){
  console.log(amazonBasket[x]);}

//Use values to determine if it's in checkBasket
for (let item in amazonBasket){
  if(amazonBasket[item]){
  }
}

let valueForKey =










kj
