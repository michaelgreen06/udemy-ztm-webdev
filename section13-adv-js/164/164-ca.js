//string padding

.padStart()
.padEnd()

'turtle'.padStart(10);//makes whole string 10 characters

//trailing commas in functions, paramter lists and calulates

const fun = (a,b,c,d,)=>{
  console.log(a);
}

// Object.values
// Object.entries
//previously had Object.keys
let obj={
  username0:"santa",
  username1:"rudolph",
  username2:"adolph"
}

//keys basically turns the object into an array
//previous way to do it=
Object.keys(obj).forEach((key, index)=>{
  console.log(key,obj[key]);
})

//new way - gives each username value
Object.values(obj).forEach(value=>{
  console.log(value);
})

//new way-gives each property AND value
//allows us to use array methods like map, reduce, filter ETC
Object.entries(obj).forEach(value=>{
  console.log(value);
})

//real life example
Object.entries(obj).map(value=>{
  return value[1] + value[0].replace('username','');
})

//newest feature in ES8 that people are excited about is Async Await












//
