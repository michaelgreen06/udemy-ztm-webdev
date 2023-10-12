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
