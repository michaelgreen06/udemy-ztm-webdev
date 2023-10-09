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

//destructuring the above function
async function fetchData1() {
  try {
    const [users, posts, albums] = await Promise.all(
      urlss.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (error) {
    console.error(error);
  }
}

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
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
      })
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    console.error("ooooops", error);
  }
};

// #3)Add a try catch block to the #2 solution in order to catch any errors.
// Now, use the given array containing an invalid url, so you console.log
//your error with 'oooooops'.
const urls1 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
