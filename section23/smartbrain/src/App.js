import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Particles from 'react-tsparticles';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';


const particlesOptions={
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area:89
      }
    }

    }
}

class App extends Component{
  render(){
    return(
      <div className="App">
      <Particles className='particles'
      params={particlesOptions}
      / >
       <Navigation />
       <Logo />
       <Rank />
       <ImageLinkForm />
      {/*<FaceRecognition />*/}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
