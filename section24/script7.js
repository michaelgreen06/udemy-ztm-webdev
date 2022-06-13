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
//I'm going to investigate the do while loop
//I think I have to use something different than match!

if (sum1-sum2===-1) {
  return something.length
  // block of code to be executed if the condition is true
} else {
  keep looping until sum1-sum2===-1
  // block of code to be executed if the condition is false
}

//how this may look w/ a do while loop. or at least this is the condition that needs to be tested

// While sum+array1[i].length-array2[i].length >0
// Array1[0].length=4 - Array2[0].length=0===4
// 4+Array1[1].length=0-Array2[1].length=0===4
// 4+Array1[2].length=0-Array2[2].length=0===4
// Sum+array1[i].length-arrary2[i].length


//this code seems to work but the answer it gives (891) isn't correct according to advent
//i tried 891,892,893 & 900 as result but all were wrong
//I think it's not working because the 891 is the array number that causes -1
//now that needs to be translated into position
let result = 0;
let i = -1;
const array=inst.split(")")//outputs a bunch of arrays
const array2=inst.split("(")//outputs a bunch of arrays

do {
  i = i + 1;
  // result = result + i;
  result=result + array[i].length-array2[i].length;

} while (result > -1);

console.log(i);



//this code tests the output of the code above
//when i<891 the result is -1

let result = 0;
let i = -1;
const array=inst.split(")")//outputs a bunch of arrays
const array2=inst.split("(")//outputs a bunch of arrays

do {
  //i = i + 1;
  // result = result + i;
  result=result + array[0].length-array2[0].length;

} while (i < 891);

console.log(result);


//New method using .match and regular expression to capture the parenthesis literal
inst.match(/[)]/g).length //3384
inst.match(/[(]/g).length //3616
//3616-3384=232 <--- this is the right answer!!
//How do I use match to determine when there is 2 more ) than (??
//Move one space at a time and do the sum of the lengths for each time.
//^^this is how to solve the prob but not sure how to code 
