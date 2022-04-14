import React from 'react';

const SearchBox = ({searchChange})=>{
  return(
  <div className='pa2'>
    <input
      className='tc pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='Enter ETH Address'
    />
  </div>
  );
}

export default SearchBox;

//how do I get these results to modify the api url?!
