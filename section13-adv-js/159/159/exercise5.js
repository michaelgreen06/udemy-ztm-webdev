// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" added to the end of each username
const modifiedUsersnames = [];
const array2 = array.forEach(adding);

function adding(item) {
  modifiedUsersnames.push(item.username + "!");
}

//Create an array using map that has all the usernames with a "? to each of the usernames
array.map(question);

function question(user) {
  return user.username + "?";
}

//Filter the array to only include users who are on team: red
const result = array.filter(redCheck);

function redCheck(user) {
  return user.team === "red";
}

//Find out the total score of all users using reduce
const reduced = array.reduce(add, 0);

function add(acc, user) {
  return acc + user.score;
}
console.log(reduced);

// (1), what is the value of i?
// i represents the index and it changes over each iteration of the map method. Iniitally it's value is 0
// the final value is 5

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const modifiedItems = array.map(itemsOwned);

function itemsOwned(user) {
  return {
    ...user,
    items: user.items.map((itemsArr) => itemsArr + "!"),
  };
}

//I want to return array and want to replace element #3 in each object w/ the modifiedItems array
