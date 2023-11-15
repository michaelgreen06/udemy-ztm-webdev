import React from "react";
import Card from "./Card";

const CardList = ({ jokes }) => {
  // const jokeData = () => {
  //   const array = [];
  //   for (let i = 1; i < 11; i = i + 1) {
  //     array.push({ id: i, data: i });
  //   }
  //   return array;
  // };

  //I believe I need to change this to be an array of jokes from icanhazdadjoke instead of the random array above
  // const data = jokeData();
  return (
    <div>
      {jokes.map((item, i) => {
        return (
          <Card
            key={i}
            id={item.id}
            joke={item.joke}
          />
        );
      })}
    </div>
  );
};

export default CardList;

//I know I need an array of cards and that I need to use map to get an array of the cards.
//I think I will get rid of the jokeData array I made above because that was just to test to see if my display was going to work
//now that I know I have this setup properly for my display to work I can use real jokes in the cardList

//11/15/23 use useEffect to fetch data from icanhazdadjoke and get an array of jokes then feed those jokes into each card using map
//The current api responses include joke ID

//the api returns an array of joke objects w/ id, joke & status keys
