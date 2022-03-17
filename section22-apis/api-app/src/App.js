// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'; //andrei uses destructurring in vid225: import React, {Component} from 'react';
import SearchBox from './SearchBox'

// class App extends React.Component { //Andrei has extends Component. doesn't include React
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//I am adding this note so I can get a green block on github!
//             Learning to code React and apis. Time AWAY!
//             Why isn't it updating nin GITHUB?
//             I will use this app to build on etherscan API
//           </a>
//         </header>
//       </div>
//     );
//   }
// }


class App extends Component{
  constructor(){
    super()
    this.state={
      // robots:robots,//I ilkely will remove this for my app!
      searchfield:''
    }
  }
  render(){
    return(
      <div className='tc'>
        <h1>MultiSig Gas Tracker</h1>
        <SearchBox/>
      </div>
    );
  }
}

//old style before changing to class in order to utilize state
// const App=()=>{
//   return(
//     <div className='tc'>
//       <h1>MultiSig Gas Tracker</h1>
//       <SearchBox/>
//     </div>
//   );
// }

export default App;
