import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component{
 constructor(){
    super()
    this.state = {
      robots:[],
      searchfield: ''
    }
}

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}))
}

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
    })
    return(
      <div className='tc'>
        <h1 className='f1'>Ztm-Robofriend-redux</h1>
        <SearchBox searchChange = {this.onSearchChange} />
        <Scroll>
            <CardList robots={filteredRobots} />
        </Scroll>
      </div>
      )
  }
}

export default App;
