import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { addTodo } from '../actions/TodoAction'
import { connect, } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const style = {
  margin: 12,
};

class HeaderTodo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  handleSave = () => {
    if(this.state.text=="") return;
    this.props.dispatch(addTodo(this.state.text));
    this.setState({text: ""});
  }

  handleChange =(event) => {
    
    this.setState({text: event.target.value});
  }
  render() {

    let input
    return (
      <header className="header">
        <form onSubmit={e => {
          e.preventDefault()
          this.handleSave()
        }}>
          <TextField
            type="text"
            hintText="Hint Text"
            onChange={this.handleChange}
            value ={this.state.text}
          />

          <RaisedButton label="Add" type='submit' primary={true} style={style} />
        </form>
      </header>
    )
  }
}

export default connect()(HeaderTodo);