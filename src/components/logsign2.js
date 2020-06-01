import React, {Component} from 'react';
import firebase from './Firebase/firebase';
import Signup from './signComponent';
import Welcome from './welcome';
class Sign extends Component {

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
          {this.state.user ? (<Welcome />) : (<Signup />)}
        </div>
    );
  }
}

export default Sign;