import React, {Component} from 'react';
import './Hello.css';

// class Hello extends Component{
//   render(){
//     return(
//       <div className='f1 tc'>
//         <h1>hello world</h1>
//         <p>{this.props.greeting}</p>
//       </div>
//   );
//   }
// }

//same as above but written explicitly as a function
const Hello=(props)=>{
  return(
    <div className='f1 tc'>
      <h1>hello world</h1>
      <p>{props.greeting}</p>
    </div>
  );
}

export default Hello;
