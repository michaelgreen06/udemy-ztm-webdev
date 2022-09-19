const app=require('http')
  .createServer((req,res)=>res.send('oh hi there!'));

const Port=process.env.Port

app.listen(Port,()=>{
  console.log('server is listening on ${Port}');
});

console.log(Port);