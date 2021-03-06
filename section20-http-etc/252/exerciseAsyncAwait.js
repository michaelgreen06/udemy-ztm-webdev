// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

async function fetchUsers(){
  const resp=await fetch("https://jsonplaceholder.typicode.com/users/");
  const data=await resp.json();
  console.log(data);
}

//andrei solution
async function fetchStarship() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
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
//my solution
//It wasn't working to define fetchUsers as a const outside of the map function
//declaring it in the global scope fixed the problem but that seems improper syntax?
//promises.all is expecting an array of promises and my original code was basically
//passing it a chunk of code instead of an array of promises
const fetchUsers=async function (url){
  const resp=await fetch(url);
  return resp.json();
}
const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(fetchUsers)
    );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
  }
//andrei solution:
  const getData = async function () {
    try{
      const [users, posts, albums] = await Promise.all(
        urls.map(async function (url) {
          const response = await fetch(url);
          return response.json();
        }),
      );
      console.log("users", users);
      console.log("posta", posts);
      console.log("albums", albums);
    }catch(err){
      console.log('oops!',err);
    }
  };

//andrei sol3
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      }),
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("ooooooops", err);
  }
};

//OG function:
const getData=async function(){
  try{
    const [users,posts,albums]=await
    Promise.all(urls.map(url=>{
      return fetch(url).then(resp=>resp.json())
    }))
    console.log('users',users);
    console.log('posts',posts);
    console.log('albums',albums);
  }catch(err){
    console.log('oops!',err);
  }
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];
