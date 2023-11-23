import React from "react";

const Location = ({}) => {
  return <div></div>;
};

export default Location;

//how will this component work? It's going to take the position that is obtained in app.js and then use openweathermap's geocode api
//to convert the lat & lon into a location name. I will pass it the state of lat & lon that was obtained in app.js.
//It is acceptable to have useEffect in this component. It will use the lat & lon obtained in app.js. It will have a dependency array
//that causes it to rerender if lat or lon changes.
