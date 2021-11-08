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

function isUserValid(username, password){
  for (var i=0; i<database.length; i++){
    if(database[i].username===username &&
    database[i].password===password){
    return true;
    }
        }
        return false;}

function signIn(username, password){
  if (isUserValid(username,password)){
    console.log(newsfeed);
  }
  else{
      alert("sorry, wrong username & password");
        }
}

var userNamePrompt=prompt("What\'s your username?");
var passwordPrompt=prompt("what\'s your password?");


signIn(userNamePrompt,passwordPrompt);
