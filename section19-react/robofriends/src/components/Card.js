import React from 'react';

const Card=({name, email, id})=>{//here I have {name etc} because it is desctructured. W/O desctruct it would
  //have props and below i'd have props.name etc. this is because these params are being passed as props in the cardlist file
  //the step b4 this final desctructuring would be const {name, email, id}=props and left const card =(props).
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
