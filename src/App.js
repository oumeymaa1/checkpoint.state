import Person from './Components/Person'
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={show:false}
  }
  hundleclick=() => this.setState({show:!this.state.show})
  render() {
    return (
      <div className='App'>
        <button onClick={this.hundleclick}>click here</button>
        {this.state.show? <Person/> :null }
      </div>
    )
    
  }
}
