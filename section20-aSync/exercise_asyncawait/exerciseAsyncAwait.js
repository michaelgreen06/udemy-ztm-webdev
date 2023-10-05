// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

async function getData2() {
  const userData = await fetch("https://jsonplaceholder.typicode.com/users/");
  const response1 = await userData.json();
  console.log(response1);
}

const getData1 = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await response.json();
  console.log(data);
};

//#2a) convert this function to async await version
const urlss = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urlss.map((url) => fetch(url).then((resp) => resp.json())))
  .then((array) => {
    console.log("users", array[0]);
    console.log("posts", array[1]);
    console.log("albums", array[2]);
  })
  .catch("oops");

//this fetchData1 function works!
//next I could destructure the array
async function fetchData1() {
  const data2 = await Promise.all(
    urlss.map((url) => fetch(url).then((resp) => resp.json()))
  );
  const users = data2[0];
  const posts = data2[1];
  const albums = data2[2];

  console.log(data2);
}

//this is function that I want to run when I want to get all resolved promises at the same time
//1)understand - I'm not sure I understand what is happening here. I think I am trying to create a way
//to wait for all promises to be resolved so I can log everything to the console at the same time
//I am fetching data from 3 different APIs and need to wait for each to be resolved. I want to do the first
//version the stupid simple way w/o array destructurring. Also, an easier way to start would be to do it
//for one url instead of all 3.
//The async function works for one of the URLs in the array. How can I get it to work for all elements in the array?
//I need some type of loop. I could use a for loop. Andrei would say I should use map. How would it work if I use map?
//map would make a new array of arrays that each contain objects.
//I obviously wouldn't write the function this way but I'm just trying to do small chunks at a time so I can understand
//what is happening.
//promise.all receives an array of promises and returns an array of fulfilled promises
//2)plan
//3)divide

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json()))
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls1 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
