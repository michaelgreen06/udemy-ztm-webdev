const express = require ('express');

const app=express();

app.get('/', (req,res)=>{
  res.send("hiiiii hiii bike to work daaaay 🌊🚲, Next is tube to work day. Then crawl to work day!")
});

app.listen(3000);
