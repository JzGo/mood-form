import React, { Component } from 'react'

class DisplayMood extends Component {
  render(){
    return(
      <h2>{this.props.name} is feeling {this.props.mood}.</h2>
    )
  }
}

export default DisplayMood
