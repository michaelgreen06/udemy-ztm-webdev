import React from 'react';

const Submit=({searchfield, searchChange})=>{//the {} are being used because this is descturctured!
  return(
    <input
    type="submit"
    onChange={searchChange}
    />);
}


export default Submit;
