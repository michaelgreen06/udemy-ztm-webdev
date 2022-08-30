const express=require('express');
const app = express();
const bcrypt=require('bcrypt-nodejs');
const cors=require('cors');
const knex=require('knex')

const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'postgres',
    password : 'password',
    database : 'smartbrain'
  }
});

// db.select('*').from('users').then(data=>{
//   console.log(data);
// });

app.use(express.json());


const database={
  users:[
    {
      id:'123',
      name:'Michael',
      password:'cookies',
      email:'mike@gmail.com',
      entries:0,
      joined:new Date()
    },
    {
      id:'124',
      name:'sally',
      password:'bananas',
      email:'sally@gmail.com',
      entries:0,
      joined:new Date()
    }
  ],
  login:[
    {
      id:'987',
      hash:'',
      email:'mike@gmail.com'
    }
  ]
}

app.use(cors());

app.get('/',(req,res)=>{
  res.send(database.users);
})

app.post('/signin', (req,res)=>{
  if(req.body.email===database.users[0].email &&
  req.body.password===database.users[0].password){
    res.json(database.users[0]);
  }else{
    res.status(400).json('error logging in');
  }
});

app.post('/register',(req,res)=>{
  const{email,name,password}=req.body;
  db('users')
  .returning('*')
  .insert({
    email:email,
    name:name,
    joined:new Date()
  })
    .then(user=>{
      res.json(user[0]);
    }).catch(err=>res.status(400).json('Unable to reister ;('))
})

app.get('/profile/:id',(req,res)=>{
  const {id}=req.params;
  db.select('*').from('users').where({
    id:id// can also be written as ({id})because this is es6 & prop & value are same
  })
  .then(user=>{
    if (user.length){
      res.json(user[0])  
    }else{
      res.status(400).json('not found :(')
    }
  })
  .catch(err=>res.status(400).json('error finding user'))
})

app.put('/image', (req,res)=>{
  const {id}=req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries=>{
    res.json(entries[0].entries);
  })
  .catch(err=>res.status(400).json('unable to get entries'))
})
//

// bcrypt.hash(password, null, null, function(err, hash) {
//   console.log(hash);
// });

// Load hash from your password DB.



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