// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'; //andrei uses destructurring in vid225: import React, {Component} from 'react';
import SearchBox from './SearchBox'
import Submit from './Submit'

class App extends Component{
  constructor(){
    super()
    this.state={
      searchfield:''
    }
  }

// I think I will use fetch here and have it add the searchfield
// once it is submitted??
//I think I also will use a string template w/ a $ then a variable
//which is appended to the string.


// fetch(`https://api.etherscan.com/api
// ?module=account
// &action=tokentx
// &address=${event.target.value}
// &startblock=0
// &endblock=99999999
// &sort=asc
// &apikey=S58AX7RGE8H35RT8QXD4RQ2A427RQF7B1M`)

onSearchChange = (event)=>{
  this.setState({searchfield: event.target.value});
}

  render(){
    return(
      <div className='tc'>
        <h1>MultiSig Gas Tracker</h1>
        <SearchBox />
        <Submit searchChange={this.onSearchChange}/>
      </div>
    );
  }
}

export default App;
