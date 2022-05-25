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
