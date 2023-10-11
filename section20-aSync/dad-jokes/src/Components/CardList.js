import React from "react";
import Card from "./Card";

const CardList = () => {
  const jokeData = () => {
    const array = [];
    for (let i = 1; i < 11; i = i + 1) {
      array.push({ id: i, data: i });
    }
    return array;
  };
  const data = jokeData();
  return (
    <div>
      {data.map((item, i) => {
        return (
          <Card
            key={i}
            id={item.id}
            joke={item.data}
          />
        );
      })}
    </div>
  );
};

export default CardList;

//I know I need an array of cards and that I need to use map to get an array of the cards.
