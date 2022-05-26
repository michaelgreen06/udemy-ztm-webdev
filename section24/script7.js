const fs=require('fs');

fs.readFile('./hello.txt',(err,data)=>{
  if (err){
    console.log('errrroooooorrrrr');
  }
  console.log('async',data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('sync',file.toString());


//https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript
//when using split() w/ the ( separator it provides arrays of ) characthers.
//I need to count the number of characters in those arrays then return the sum of them
//I think I can use an if statement to skip arrays that are less than 1
//https://stackoverflow.com/questions/52802420/how-to-count-a-number-of-character-in-each-element-of-array-in-js
