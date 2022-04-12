import React from 'react';
import Card from './Card';


const CardList = ({robots})=>{
  if(true){
    throw new Error('nope!');
  }
  return(
    <div>
    {
    robots.map((user,i)=>{
      return (
        <Card
          key=i
          id=robots[i].id
          name=robots[i].name
          email=robots[i].email
          //in Andrei's original the prop values i, robots[i].id etc were wrapped in {}
          //This is just because he sloppy pasted them from jsx context & he didn't remove them
          />
        );
      })
    }
    </div>
  );
}

export default CardList;
