const express = require ('express');

const app=express();
const port=3001;

app.get('/', (req,res)=>{
  res.send("<h1>hiiiii hiii</h1> bike to work daaaay 🌊🚲, Next is tube to work day. Then crawl to work day!")
});

//IT's taking me a while to get the hang of this backend stuff.

app.listen(port);
