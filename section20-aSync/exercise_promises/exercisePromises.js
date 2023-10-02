// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "success");
});
promise1.then((results) => results);

// #2) Run the above promise and make it console.log "success"
promise1.then((results) => console.log(results));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve(setTimeout(() => console.log("success"), 4000));

// #4) Catch this error and console log 'Ooops something went wrong'
const promise3 = Promise.reject("failed");
promise3.catch((error) => console.log(error, "oops! Something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  "http://swapi.dev/api/people/1",
  "http://swapi.dev/api/people/2",
  "http://swapi.dev/api/people/3",
  "http://swapi.dev/api/people/4",
];

Promise.all(urls.map((url) => fetch(url).then((response) => response.json)));

//I need to figure out how to do this fetch w/ an array of urls. I know map iterates over an array and makes a new array
//I will use map to fetch the data from each URL

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
