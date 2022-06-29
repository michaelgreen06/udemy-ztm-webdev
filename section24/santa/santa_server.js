const express = require ('express');

const app=express();

app.get('/', (req,res)=>{
  res.send("<h1>hiiiii hiii</h1> bike to work daaaay 🌊🚲, Next is tube to work day. Then crawl to work day!")
});

//I'm definitely going to make a server today. At least I'll try that is.

app.listen(3000);
