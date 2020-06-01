import React, {Component} from 'react';
import firebase from './Firebase/firebase';
import Login from './loginComponent';
import Welcome from './welcome';
//import './App.css';

class Login1 extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
        <div>
          {this.state.user ? (<Welcome />) : (<Login />)}
        </div>
    );
  }
}

export default Login1;