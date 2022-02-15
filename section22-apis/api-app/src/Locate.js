import React from 'react';
import './Locate.css'

class Locate extends React.Component { //Andrei has extends Component he did import React {Component} from 'react';
  render(){
    return (
      <div className='f1 tc'>
        <h1>hi world</h1>
        <p>{this.props.greeting}</p>
      </div>
    )
  }
}

export default Locate;

//re-writing Locate class as a function:
// const Locate =(props)=>{
//   return (
//     <div className='f1 tc'>
//       <h1>hi world</h1>
//       <p>{props.greeting}</p> //we delete this because we now have a function, not an object.
//     </div>
//   )
// }
