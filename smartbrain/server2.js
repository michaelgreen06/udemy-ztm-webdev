const app=require('http').createServer((req,res)=>res.send('oh hi there!'));

const PORT=process.env.PORT;
const fart='hi fart';

app.listen(PORT,()=>{
  console.log('server is listening on ${fart}');
});

console.log(PORT);