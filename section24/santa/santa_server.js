const express = require ('express');

const app=express();

app.get('/', (req,res)=>{
  res.send("hiiiii hiii bike to work daaaay 🌊🚲")
});

app.listen(3000);
