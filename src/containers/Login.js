import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';

const styles = {
  paper: {
    textAlign: 'center',
    minHeight: '100px',
    margin: '50px auto',
    width: '400px',
    padding: '20px'
  },
  hrgroup: {
    textAlign: 'center',
    marginTop: '4em',
  },
  button: {
    width: '360px',
    marginTop: '40px'
  },
  textfield: {
    width: '360px',
  },
  image:{
    width:'80px',
  }

};

class Login extends Component {

  constructor(){
    super();
    this.state ={
      username: "",
      password: "",
    }
  }

  handleUserNameChange(event){
    this.setState({username: event.target.value});
    console.log(this.state.username);
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  submitForm(event){
    event.preventDefault();
    const { history } = this.props;
    history.push('/admin');

  }
  render() {
    return (
      <div>
        <div style={styles.hrgroup}>
          <h1>Teams</h1>
          <h3>Works Management</h3>
        </div>
        <Paper style={styles.paper}>
          <form onSubmit={this.submitForm.bind(this)}>
          <TextField
            style={styles.textfield}
            floatingLabelText="Username"
            type="text"
            value={this.state.username}
            onChange={this.handleUserNameChange.bind(this)}
            
          />
          <TextField
            style={styles.textfield}
            floatingLabelText="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
          />
          <br />
          <RaisedButton type="submit" label="Login" primary={true} style={styles.button} />
          </form>
        </Paper>
        <div style={styles.hrgroup}>
          <img src="https://www.polymer-project.org/images/logos/p-logo.svg" style={styles.image}/>
          <p>Design by <a href="#" target="_blank">Togepi</a></p>
        </div>
        </div>

        );
  }
}

export default Login;
