// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];


//Create an array using forEach that has all the usernames with a "!" to each of the usernames

// these resources may be helpufl
//(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#objects_and_properties)
//https://www.programiz.com/javascript/examples/extract-value-array

//my OG code. adds "!" to objects not properties
const uN=[];
const newArray=array.forEach((username)=>{
  uN.push(username + "!");
})

console.log("username!",uN);

//my new code. WORKS :_)
const uN=[];
const newArray=array.forEach((obj)=>{
  uN.push(obj.username + "!");
})

console.log("username!",uN);

//andrei solution:
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);

//code from @junaid

const arrayOfObjects = [{num: 10},{num:15}]
arrayOfObjects.forEach(function(obj){
console.log(obj.num);
}
)

//code from @pohica

// Are you trying to list all the properties of individual objects as the elements of that array or
// looking up a specific property? Keep in mind that your array doesn't have to have objects in them
// that have the same properties, which can complicate the task a bit.
//
// To borrow code from @junaid , here's how you can do this:

const arrOfObj = [
  {num: 10},
  {num:15},
  {num: -6, negative: true}
];

arrOfObj.forEach((obj) => console.log(obj.num));


// The this code would print to the console: 10, 15, -6
// Arrow function (can be a normal function as well) accepts a parameter "obj" (our name) and
// that parameter defines each of the elements of the array that pass through the function.
// forEach() works the same as a for loop which means that the number of "obj" you'd get is the
// same as the number of elements of the array that called forEach().
//
// If you want to list all object properties, you'd use:

arrOfObj.forEach((obj) => console.log(Object.keys(obj)));


// The output of this code would be:
//
// num           // first el. (only num property)
// num           // second el. (only num property)
// num, negative // third el. (num, negative property)



//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray=array.map((obj)=>{
  return obj.username + "?";
});

console.log("log", mapArray);

//same thing but Simplified FURTHER!
const mapArray=array.map((obj)=> obj.username + "?");

console.log("log", mapArray);


//same thing but w/ trad function notation
const mapArray=array.map(function(obj){
  return obj.username + "?";
});

//andrei solution:
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);

//Filter the array to only include users who are on team: red
const result=array.filter(function(obj){
  return obj.team==="red";
})

//same thing w/ ARROW notation!
const result=array.filter((obj)=>obj.team==="red");

//andrei solution:
const filterArray = array.filter(user => {
	return user.team === "red";
})
console.log(filterArray);


//Find out the total score of all users using reduce
//very helpfulto find answer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const reducer= function (prev,curr){
  return prev+curr.score;
}

array.reduce(reducer,0);// had to provide an intial value so each item could pass through the array!

//same as above but in arrow notation

const reducer = (prev,curr)=>prev+curr.score;

//andrei solution:
const total = array.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);

// (1), what is the value of i? - index #
// (2), Make this map function pure:-to make it pure eliminate the alert & console.log
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//pure const newArray
const newArray = arrayNum.map((num, i) => num * 2);


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

//my answer I was initally very close
//thing that trhew me off was item vs items. use items when I want to call the actual property
//use item when it is for each individual item.
const ans = array.map(function(user){
  user.items=user.items.map(function(item){
    return item + "!";
  })
  return user;
})

// andrei answer
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);

//andrei in function notation
const answer = array.map(function (user){
	user.items = user.items.map(function (item) {
		return item + "!"
	});
	return user;
})
console.log(answer);
