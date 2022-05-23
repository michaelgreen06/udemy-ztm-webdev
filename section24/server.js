const express=require('express');

const app = express();

app.use(express.static(__dirname + '/public'))


// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
//
// app.get('/:id',(req, res)=>{
//   console.log(req.params);
//   res.status(404).send('not found');
// });

app.listen(3000);


// 289
// const express=require('express');
//
// const app = express();
//
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
//
// app.get('/',(req, res)=>{
//   res.send('getting root');
// });
//
// app.get('/profile',(req, res)=>{
//   res.send('getting profile');
// });
//
// app.post('/profile',(req, res)=>{
//   console.log(req.body)
//   res.send("success");
// });
//
// app.listen(3000);

// const express=require('express');
//
// const app = express();
//
// app.use((req,res,next)=>{
//   console.log('<h1>hellooooo!</h1>');
//   next();
// })
//
// app.get('/',(req, res)=>{
//   res.send('testest');
// });
//
// app.listen(3000);


// OG
// app.use(bodyparser.urlencoded({extended: false}));
// app.use(bodyparser.json());
//
// New
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());



// const express=require('express');
//
// const app = express();
//
// app.get('/',(req, res)=>{
//   res.send('getting root');
// });
//
// app.get('/profile',(req, res)=>{
//   res.send('getting profile');
// });
//
// app.post('/profile',(req, res)=>{
//   const user={
//     name:'Sally',
//     hobby:'GUNS'
//   }
//   res.send(user);
// });
//
// app.listen(3000);


// const http=require('http');
//
// const server = http.createServer((request, response)=>{
//   // console.log('headers',request.headers);
//   console.log('method',request.method);
//   console.log('url',request.url);
//   const user={
//     name:'John',
//     hobby:'golf'
//   }
//   response.setHeader('Content-Type','application/json');
//   response.end(JSON.stringify(user));
// })
//
// server.listen(3000);
