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
  res.send(database.users);
})

app.post('/signin', (req,res)=>{
  if(req.body.email===database.users[0].email&&
  req.body.password===database.users[0].password){
    res.json('success!');
  }else{
    res.status(400).json('error logging in');
  }
})

app.post('/register',(req,res)=>{
  const{email,name,password}=req.body;
  database.users.push({
    id:'125',
    name:name,
    email:email,
    password:password,
    entries:0,
    joined:new Date()
  })
  res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id',(req,res)=>{
  const {id}=req.params;
  let found=false;
  database.users.forEach(user=>{
    if (user.id===id){
      found=true;
    return  res.json(user);
    }
  })
  if (!found){
    res.status(400).json('user not found');
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