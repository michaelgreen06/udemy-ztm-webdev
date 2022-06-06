const fs=require('fs');

fs.readFile('./hello.txt',(err,data)=>{
  if (err){
    console.log('errrroooooorrrrr');
  }
  console.log('async',data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('sync',file.toString());

//Challenge link -> https://adventofcode.com/2015/day/1
//https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript
//when using split() w/ the ( separator it provides arrays of ) characthers.
//I need to count the number of characters in those arrays then return the sum of them
//I think I can use an if statement to skip arrays that are less than 1
//https://stackoverflow.com/questions/52802420/how-to-count-a-number-of-character-in-each-element-of-array-in-js
//can use map or reduce to perform a function on each array element. Not sure if it will do for all arrays or just one
//So I will try an example to investigate
//the below code works!

let inst="((())()()()()()((((())))))"
const array=inst.split(")")//outputs a bunch of arrays
const length=array.reduce(funcName).length;
function funcName(total, num){
  return total + num;
}

const array2=inst.split("(")//outputs a bunch of arrays
const length2=array2.reduce(funcName2).length;
function funcName2(total, num){
  return total + num;
}

length-length2

//^^ this actually worked!!!
// I think I need to use an if statement
// I think I could use reduce to find answer and have it give me the index number when total = -1
//I think I may use a while or do while loop to solve prob 2! https://www.w3schools.com/js/js_loop_while.asp


if (sum1-sum2===-1) {
  return something.length
  // block of code to be executed if the condition is true
} else {
  keep looping until sum1-sum2===-1
  // block of code to be executed if the condition is false
}
