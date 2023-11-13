import React from "react";

const Card = function ({ id, joke }) {
  return (
    <div className="bg-green tc">
      {/* <h1 className="bg-blue pa1">{`Joke #${jokeNum}`}</h1> */}
      <h2>{`Joke #${id}`}</h2>
      <p className="bg-green pa2"> {joke}</p>
    </div>
  );
};

export default Card;

//Yay! I got 10 cards to display roughly as I wished. Now I need to figure out how to fetch data from the API

//making an array of 10 elements which are all the same URL
//the for loop doesn't necessarily make an array. What I can do is push to apiArray

function createApiArray() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push("https://icanhazdadjoke.com/");
  }
  return array;
}
const urls = createApiArray();

//now I have an array of URLs and maybe learned something about expressions vs statements by making it.
//statements are like mathematical equations that return results, Expressions are like instructisons
//getting each one to resolve individually is currently too complex for me so I will just use promise.all and wait
//until all are settlted

Promise.all(
  urls.map(
    setTimeout((url) => {
      return fetch(url).then((resp) => resp.json());
    }, 50)
  )
).then((array) => {
  console.log(array[0]);
});

//Need to understand why chat GPT suggested this code:
//specifically what is new Proimse and why are we using it?!

Promise.all(
  urls.map((url) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => resolve(data))
          .catch((error) => resolve({ error }));
      }, 50);
    });
  })
).then((array) => {
  console.log(array[0]);
});

//trying to remember where I left off and what I need to do next. I created an array of APIs that need to be called
//to fill each card.
//always return the result of .then() so there is something for the next .then() in the chain to accept

//10/18/23 re-watch async videos and try to understand the above code from chat GPT
//I think I understand what is happening w/ the chat GPT code. We had to create a new promise w/
//fetch inside of it so that we can control when fetch is called. If we don't wrap fetch in a promise it will
//execute right away. We use the resolve argument in the callback function of the promise constructor to move
//the promise into the fulfilled state.

//My try w/o help

Promise.all(
  urls.map(
    setTimeout((url) => {
      return fetch(url).then((resp) => resp.json());
    }, 50)
  )
).then((array) => {
  console.log(array[0]);
});

Promise.all(
  urls.map((url) => {
    return new Promise((resolve) => {
      setTimeout((url) => {
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => resolve(data))
          .then((error) => resolve(error));
      }, 50);
    });
  })
);

//10/19/23
//rewrite the promise.all function entirely from scratch!!
//1145 I am trying to get a new array that makes fetch calls after 50ms each
//I have an array of urls and I want one URL to get called then wait 50 ms and fetch the next URL
//do I need to declare this as a variable? Not sure.

Promise.all(
  urls.map((url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url)
          .then((resp) => resp.json())
          .then((data) => resolve(data))
          .catch((error) => resolve(error));
      }, 50);
    });
  })
);

//11/13/23 rewrite the Promise.all statement from scratch again

//promise.all takes an iterable of promises & //returns a single promise
//w/ a resulf from all the promises that were passed to it
//I want to pass the iterable of promises that are fetch calls to the icanhazdadjoke api.
//I know i need to make a new promise. I have an array of urls and I want to use map to call them one at a time
//after a 50ms timeout.
//one way I can use Promise.all([promise1,promise2,promise3,etc]). w/ this way the promises are defined elsewhere
//then passed into promise.all. the way I'm doing it RN is to create the array of promises w/in promise.all
//perhaps I could define the promises elsewhere?! tried disabling pages a different way

//creating a variable to define the array of promises that will be passed into promise.all because it could be easier

const promiseArray = urls.map((url) => {
  new Promise(fetch(url));
});

//11/14/23 - figure out how to complete the above promiseArray variable. needs timeout and resolve,reject
