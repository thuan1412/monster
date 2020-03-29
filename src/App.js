import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import {SearchBox} from './components/searc-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});   
  }

  render() {
    const {monsters, searchField } =  this.state;
    const filterdMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    
    return (
      <div className="App">
        <h1>Monster Thuan </h1>
        <SearchBox 
          placeholder='Search monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
