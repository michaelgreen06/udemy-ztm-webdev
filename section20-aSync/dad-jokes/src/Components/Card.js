import React from "react";

const Card = function ({ id, joke }) {
  return (
    <div className="bg-green tc dib ma2 fl w-49">
      {/* <h1 className="bg-blue pa1">{`Joke #${jokeNum}`}</h1> */}
      <h2>{`Joke ID: ${id}`}</h2>
      <p className="bg-green pa2"> {joke}</p>
    </div>
  );
};

export default Card;

//Yay! I got 10 cards to display roughly as I wished. Now I need to figure out how to fetch data from the API

//making an array of 10 elements which are all the same URL
//the for loop doesn't necessarily make an array. What I can do is push to apiArray

// function createApiArray() {
//   const array = [];
//   for (let i = 0; i < 10; i++) {
//     array.push("https://icanhazdadjoke.com/");
//   }
//   return array;
// }
// const urls = createApiArray();

//now I have an array of URLs and maybe learned something about expressions vs statements by making it.
//statements are like mathematical equations that return results, Expressions are like instructisons
//getting each one to resolve individually is currently too complex for me so I will just use promise.all and wait
//until all are settlted

//Need to understand why chat GPT suggested this code:
//specifically what is new Proimse and why are we using it?!

// Promise.all(
//   urls.map((url) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         fetch(url)
//           .then((resp) => resp.json())
//           .then((data) => resolve(data))
//           .catch((error) => resolve({ error }));
//       }, 50);
//     });
//   })
// ).then((array) => {
//   console.log(array[0]);
// });

//I think I understand what is happening w/ the chat GPT code. We had to create a new promise w/
//fetch inside of it so that we can control when fetch is called. If we don't wrap fetch in a promise it will
//execute right away. We use the resolve argument in the callback function of the promise constructor to move
//the promise into the fulfilled state.

//promise.all takes an iterable of promises & returns a single promise
//w/ a resulf from all the promises that were passed to it
//I want to pass the iterable of promises that are fetch calls to the icanhazdadjoke api.
//I know i need to make a new promise. I have an array of urls and I want to use map to call them one at a time
//after a 50ms timeout.
//one way I can use Promise.all([promise1,promise2,promise3,etc]). w/ this way the promises are defined elsewhere
//then passed into promise.all. the way I'm doing it RN is to create the array of promises w/in promise.all
//perhaps I could define the promises elsewhere?! tried disabling pages a different way

//creating a variable to define the array of promises that will be passed into promise.all because it could be easier

// const promiseArray = urls.map((url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(url, { headers: { Accept: "application/json" } })
//         .then((resp) => resp.json())
//         .then((data) => resolve(data))
//         .catch((error) => console.error(error));
//     }, 50);
//   });
// });

//11/14/23 - figure out how to complete the above promiseArray variable. needs timeout and resolve,reject
//final form will be promise.all(promiseArray)
//I believe promiseArray will return an array of promisess then I can feed that into promise.all
// Promise.all(promiseArray).then((array) => console.log(array[1]));

//so the above code works which is great! But now I know that it doesn't work great w/ icanhazdadjoke because
//it returns headers etc instead of straight json and now I need to figure out what to do about that.
//I now know I need to add an object to my fetch request. The object has multiple key value pairs: method, headers
//the headers value is an object that contains keys of: User-Agent, Accept, Authorization, Content-Type

//GREAT!! I have learned and made progress! and I have seen that my method will display different jokes from the DB
//Now I need to figure out how this new information is used in my project.
//I think that the functions to call the API should be located in the App component and should useEffect to get the data

// const urls = [
//   "https://icanhazdadjoke.com/",
//   "https://icanhazdadjoke.com/",
//   "https://icanhazdadjoke.com/",
// ];
