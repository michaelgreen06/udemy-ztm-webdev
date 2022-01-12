// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat(2);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newG=greeting.flatMap(array=>array.join(" "));
const newG=greeting.flatMap(
  function(array){
    return array.join(" ");
  }
);


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
greeting.flat().join(" ");


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(Infinity);


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.trimStart().trimEnd());

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray=Object.entries(users);


//#7 change the output array of the above to have the user's IDs multiplied by 2
//-- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray=Object.entries(users);

// usersArray.map((user,id)=>id*2);
//
// usersArray.forEach(function(user,id){
//   console.log(id*2);
// });

function arrayIt(){
for (var i = 0; i <= 2; i++) {
  console.log(usersArray[i][1]*2);
}}

usersArray.map(arrayIt);
//is performing the for loop for each element. That's redunant looping! I only need map!


function arrayIt(user,id){
return id*2;
}

// below code maps over array 0 & gives the expected result.
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray=Object.entries(users);

function arrayIt(user,id){
return [user][id*2];
}

//doesn't need to be a function. can be run as simply a for loop.
//when it is run it only outputs the last array
function mapfor(){
for (var i = 0; i <= 2; i++) {
  usersArray[i].map(arrayIt);
}}

usersArray.map(arrayIt);

//testing this problem 1 array at a time to understand where my above code is failing.
const users = ['user1', 18273]
function arrayIt(user,id){
return [user][id*2];
}
users.map(arrayIt);

//solution from geekyorion:
function arrayIt(user, index) {
    return index === 1 ? user * 2 : user;
}

//tilt497 solution:
const users = ['user1', 18273];
let newArray = users.map((x, i) => {
  if (typeof x === 'number') {
    return x * 2;
  } else return x;
});

console.log(newArray);

//Tried for many hours to solve using for loop and gave up because I believe
//I need a forEach loop to sovle

//to solve this concisely I think I need a forEach loop.
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray=Object.entries(users);
usersArray.forEach(mult2);
function mult2 (current,index,array){
  index[1]*2;
}

//Andrei's Solution
const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray=Object.entries(users);
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])
//my deconstruction:
//was struggling at first becuase I forgot to add return statement!
updatedUsersArray = usersArray.map(aFunc);
function aFunc (user){
return  [user[0], user[1] * 2];
}


const usersArray=[ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
updatedUsersArray = usersArray.map(function (user){
[user[0], user[1] * 2];
})

//#8 change the output array of question #7 back into an object with all the users IDs updated to
//their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

//#7 will output this:
const users=[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//this chagnes output to an object
Object.fromEntries(users);
