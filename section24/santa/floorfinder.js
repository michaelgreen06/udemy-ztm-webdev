//advent of code 2015 day 1

const fs=require('fs');

fs.readFile('./advent1.txt',(err,data)=>{
  if (err){
    console.log('errrroooooorrrrr');
  }
  data.toString('utf8');
})

//part 1
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

//part 2

let result=0;
let i=0;

for ( i = 0; result>-1; i++) {
  if (inst[i]==="("){
    result=result+1;
  }  else{
    result=result-1;
  }
}
console.log(i);