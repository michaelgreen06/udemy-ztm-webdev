const fs=require('fs');

fs.readFile('./hello.txt',(err,data)=>{
  if (err){
    console.log('errrroooooorrrrr');
  }
  console.log('async',data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('sync',file.toString());

// append
// fs.appendFile('./hello.txt',' this is so lame!',err=>{
//   if(err){
//     console.log(err);
//   }
// })

//write
// fs.writeFile('bye.txt','sad to see you go',err=>{
//   if (err){
//     console.log(err);
//   }
// })

//delete
fs.unlink('./bye.txt',err=>{
  if (err){
    console.log(err);
  }
  console.log('so meta!');
})
