// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'; //andrei uses destructurring in vid225: import React, {Component} from 'react';
import SearchBox from './SearchBox'

class App extends Component{
  constructor(){
    super()
    this.state={
      searchfield:''
    }
  }



onSearchChange = (event)=>{
return(
  window.location.href=`https://api.etherscan.com/api?module=account&action=tokentx&address=${event.target.value}&startblock=0&endblock=99999999&sort=asc&apikey=S58AX7RGE8H35RT8QXD4RQ2A427RQF7B1M`
  // fetch(`https://api.etherscan.com/api?module=account&action=tokentx&address=${event.target.value}&startblock=0&endblock=99999999&sort=asc&apikey=S58AX7RGE8H35RT8QXD4RQ2A427RQF7B1M`)
);
  // this.setState({searchfield: event.target.value});
  //wondering if I need to do something else besides fetching to get the new page to come up
//multisig address=0x230Fc981F7CaE90cFC4ed4c18F7C178B239e5F9F
//adding some comments so I can get a green square!!!
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
