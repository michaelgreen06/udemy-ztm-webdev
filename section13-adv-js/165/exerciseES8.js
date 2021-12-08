// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle=turtle.padStart(8);
rabbit=rabbit.padStart(8);


// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//it puts 7 equal signs behind the turtle. The total # of characters is 8


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

//returns multiple arrays
Object.entries(obj).forEach(function(value){
  console.log(value);
})

//returns one array
// ['my name', 'is Rudolf', 'the raindeer']
Object.entries(obj).map(function (value){
  return value[0] + " "+ value[1];
})

//my try
Object.entries(obj).join(" ");
//returns:
//'my,name is,Rudolf the,raindeer'

//my Sloppy answer!
Object.entries(obj).map(function (value){
  return value[0] + " "+ value[1];
}).join(" ");

//andrei's answer
Object.entries(obj).map(value => value.join(" ")).join(' ')



//
