const express=require('express');

const app = express();

app.use(express.json());

const database={
  users:[
    {
      id:'123',
      name:'mike',
      email:'mike@gmail.com',
      password:'cookies',
      entries:0,
      joined:new Date()
    },
    {
      id:'124',
      name:'sally',
      email:'sally@gmail.com',
      password:'bananas',
      entries:0,
      joined:new Date()
    }
  ]
}

app.get('/',(req,res)=>{
  res.send('this is working');
})

app.post('/signin', (req,res)=>{
  if(req.body.email===database.users[0].email&&
  req.body.password===database.users[0].password){
    res.json('success!');
  }else{
    res.status(400).json('error logging in');
  }
})

app.listen(3000, ()=>{
  console.log('app is running on port 3000');
})


/*
/--> res= 'this is working'
/signin --> post = success/fail
/register --> post = user
/profile/:userId --> get=user
/image --> put=user


*/