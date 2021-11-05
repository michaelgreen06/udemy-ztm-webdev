var database=[
  {
    username:"andrei",
    password:"supersecret"
  }
];

var newsfeed=[
  {
    username:"boby",
    timeline: "so tired from all that learning"
  },
  {
    username:"sally",
    timeline:"Javascript is sooooo cool"
  }
];

var userNamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("what's your password?");
function signIn(user, pass){
  if (user===database[0].username &&
    pass===database[0].password){
      console.log(newsfeed);
    }
    else{
      alert("sorry, wrong username & password");
    }
}

signIn(userNamePrompt,passwordPrompt);
