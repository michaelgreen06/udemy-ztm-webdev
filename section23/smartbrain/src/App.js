import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Particles from 'react-tsparticles';
import Clarifai from 'clarifai';
import Logo from './Components/Logo/Logo';
import Register from './Components/Register/Register';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';

//having trouble w/ preview

const app=new Clarifai.App({
  apiKey:'dbb375c5d2fb40889de03b398b3048a0'
});

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
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{},
      route:'signin',
      isSignedIn:false
    }
  }

  calcuateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById('inputimage');
    const width=Number(image.width);
    const height=Number(image.height);
    return{
      leftCol:clarifaiFace.left_col * width,
      topRow:clarifaiFace.top_row * height,
      rightCol:width-(clarifaiFace.right_col*width),
      bottomRow:height-(clarifaiFace.bottom_row*height),
    }
  }

  displayFaceBox= (box)=>{
    this.setState({box:box});
  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }

onButtonSubmit=()=>{
  this.setState({imageUrl:this.state.input});
  app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then(response=>this.displayFaceBox(this.calcuateFaceLocation(response)))
    .catch(err=>console.log(err));
}

onRouteChange=(route)=>{
  if(route==='signout'){
    this.setState({isSignedIn:false})
  } else if(route==='home'){
    this.setState({isSignedIn:true})
  }
  this.setState({route:route});
}

  render(){
    const {isSignedIn,imageUrl,route,box}=this.state;
    return(
      <div className="App">
        <Particles className='particles'
        params={particlesOptions}
        / >
         <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
         {route==='home'
         ? <div>
             <Logo />
             <Rank />
             <ImageLinkForm
             onInputChange={this.onInputChange}
             onButtonSubmit={this.onButtonSubmit}
             />
            <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
        :(
          route==='signin'
          ? <Signin onRouteChange={this.onRouteChange} />
          : <Register onRouteChange={this.onRouteChange} />
        )
        }
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
