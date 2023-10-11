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
//I don't need to wait for all data to be settled before displaying the results but I could if there were only a few
//miliseconds separating each call. I am making 10 separate calls so I will want to use a loop to iterate through all
//the calls. EG I don't want to do setTimeout 10 separate times. I want to make a for loop that increases the timeout
//duration by 50ms for each call. I don't think I need await for this because I'm not awaiting anything I'm just
//making an array of calls to be called. I will also use these fetch calls w/ the useEffect hook, I think... not important
//just yet.
