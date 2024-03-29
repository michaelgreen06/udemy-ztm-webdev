import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Particles from 'react-tsparticles';
import Logo from './Components/Logo/Logo';
import Register from './Components/Register/Register';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';

//having trouble w/ preview
//seekign green dot!



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

const initialState={
  input:'',
  imageUrl:'',
  box:{},
  route:'signin',
  isSignedIn:false,
  user:{
    id:'',
    name:'',
    email:'',
    entries:0,
    joined:''  
  }
}

class App extends Component{
  constructor(){
    super()
    this.state=initialState;
  }
  
  loadUser=(data)=>{
    this.setState({user:{
      id:data.id,
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined  
    }})
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
//created login table 
onButtonSubmit=()=>{
  this.setState({imageUrl:this.state.input});
  fetch('http://localhost:3000/imageurl',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      input:this.state.input
    })
  })
  .then(response=>response.json())
    .then(response=>{
      if(response){
        fetch('http://localhost:3000/image',{
          method:'put',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({
            id:this.state.user.id
          })
        })
          .then(response=>response.json())
          .then(count=>{
            this.setState(Object.assign(this.state.user, {entries:count}))
          })
          .catch(console.log)
      } 
      this.displayFaceBox(this.calcuateFaceLocation(response))
    })
    .catch(err=>console.log(err));
}

onRouteChange=(route)=>{
  if(route==='signout'){
    this.setState(initialState)
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
             <Rank name={this.state.user.name} entries={this.state.user.entries} /> 
             <ImageLinkForm
             onInputChange={this.onInputChange}
             onButtonSubmit={this.onButtonSubmit}
             />
            <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
        :(
          route==='signin'
          ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        )
        }
      </div>
    ); // props to signin & rank component were added during 306 lecture. There may be a div that needs to be closed above. Not sure tho
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
