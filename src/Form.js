import React, { Component } from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      userMood: '',
      name: ''
    }
  }

  //handle change to update the user's mood in form
  handleUpdate(event){
    const target = event.target
    const attribute = target.name
    const value = target.value
    this.setState({[attribute]: value})
  }

  //takes submitHandler passed from App and runs it
  //passes in the form's state
  handleSubmit(event){
    event.preventDefault()
    this.props.submitHandler(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Enter mood: </label>
        <input type="text" name="userMood" onChange={this.handleUpdate.bind(this)}/><br/>
        <label>Enter name: </label>
        <input type="text" name="name" onChange={this.handleUpdate.bind(this)}/>
        <input type="submit" value="Yo!"/>
      </form>
    )
  }
}

export default Form
