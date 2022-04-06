// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'; //andrei uses destructurring in vid225: import React, {Component} from 'react';
import SearchBox from './SearchBox'


class App extends Component{
  constructor(){
    super()
    this.state={
      // robots:robots,//I ilkely will remove this for my app!
      searchfield:'',
    }
  }

// I think I will use fetch here and have it add the searchfield
// once it is submitted??

onSearchChange(event){
  console.log(event.target.value);
}

  render(){
    return(
      <div className='tc'>
        <h1>MultiSig Gas Tracker</h1>
        <SearchBox searchChange={this.onSearchChange}/>
      </div>
    );
  }
}

export default App;
