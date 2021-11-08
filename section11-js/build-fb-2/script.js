var database=[
  {
    username:"andrei",
    password:"supersecret"
  },
  {
    username:"sally",
    password:"123"
  },
  {
    username:"ingrid",
    password:"777"
  },
];

var newsfeed=[
  {
    username:"boby",
    timeline: "so tired from all that learning"
  },
  {
    username:"sally",
    timeline:"Javascript is sooooo cool"
  },
  {
    username:"Mitch",
    timeline: "can't wait to code cool things w/ new knowledge"
  },
];

function signIn(username, password){
for (var i=0; i<database.length; i++){
  if(database[i].username===username &&
  database[i].password===password){
    console.log(newsfeed);
  }
  else{
    alert("sorry, wrong username & password");
      }
}}

//{
//   if (username===database[0].username &&
//    password===database[0].password){
//       console.log(newsfeed);
//     }
//     else{
//       alert("sorry, wrong username & password");
//     }
// }
//my guess at the proper signin loop
// database.forEach(function(username,password)){
//   if (username===database[i].username &&
//     password===database[i].password){
//       console.log(newsfeed);
// }

var userNamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("what's your password?");


signIn(userNamePrompt,passwordPrompt);
