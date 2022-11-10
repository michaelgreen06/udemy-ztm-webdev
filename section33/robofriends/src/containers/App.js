import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {setSearchfield} from '../actions';

const mapStateToProps = state=>{//mapStateToProps can be named anything but this naming is the standard
  return {
    searchfield:state.searchfield
  }
}

const mapDispatchToProps= (dispatch)=>{
  return{
  onSearchChange:(event)=>dispatch(setSearchfield(event.target.value))
  }
}
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }//updating stuff

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  render() {
    const { robots} = this.state;
    const {searchfield, onSearchChange} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);