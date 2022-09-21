const app=require('http')
  .createServer((req,res)=>res.send('oh hi there!'));

const Port=process.env.Port;
//Working on deploying to heroku production env

app.listen(Port,()=>{
  console.log(`server is listening on port ${Port}`);
});

console.log(Port);