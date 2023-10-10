import React from "react";

const Card = function ({ jokeID, jokeData }) {
  const jokeNum = "1";
  const jokeData = "really funny joke!";
  return (
    <div>
      <h1 className="bg-blue pa1">{`Joke #${jokeNum}`}</h1>
      <h2>{`Joke #${jokeID}`}</h2>
      <p className="bg-green pa3"> {jokeData}</p>
    </div>
  );
};

export default Card;

//so there will be 3 cards and they will be labeled Joke 1, Joke 2 & Joke 3
//I'd like them to flip over to reveal their jokes when they are clicked.
//It will be possible to have all 3 jokes showing at one time. When the cards are clicked
//after they are flipped they will flip back over to display joke 1 etc. if they are flipped
//again they will show the same jokes. There will be a "get new jokes" button that updates
//the jokes for each card.

//I could manually label the joke cards but if I expand to having 11 joke cards instead of 3
//it makes more sense to have the joke title be automatically generated instead of doing it manually
//The CardList component will generate the card title w/ a loop where it adds 1 to the joke number
//of the previous card.

//I want the cards to take up the entire width of the screen and to be vertically stacked.
//
