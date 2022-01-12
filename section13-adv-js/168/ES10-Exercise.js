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

function mapfor(){
for (var i = 0; i <= 2; i++) {
  usersArray[i].map(arrayIt);
}}

usersArray.map(arrayIt);


//#8 change the output array of question #7 back into an object with all the users IDs updated to
//their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
