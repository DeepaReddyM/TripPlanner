import React, { Component } from 'react';
import firebase from './Firebase/firebase';
import Header2 from './header2';
import { auth } from 'firebase';



class createTrip extends Component {

  constructor() {
    super();
    this.state = {
        //friendEmails: [],
        name: '',
        startDate: '',
        endDate: '',
        startingCity:'',
        friendEmails:[],
      //  emails:[]
      };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
 


 

  onSubmit = (e) => {
    e.preventDefault();
   
    const { name, startDate,endDate, startingCity,friendEmails } = this.state;
    var auth=firebase.auth();
    var userUid=auth.currentUser.uid;
    firebase.firestore().collection('trips').doc(userUid).set({
        name,
        startDate,
        endDate,
       friendEmails,
        startingCity
    }).then((docRef) => {
      this.setState({
        name: '',
      startDate: '',
      endDate: '',
      //friend:[],
      startingCity: ''
      });
      this.props.history.push("/trip")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
  handleEmailChange = event => {
    const search = event.target.value
    this.setState({email: search})
  }
  addFriend = event => {
    event.preventDefault()
        if (this.state.email) {
            this.setState({friendEmails: [...this.state.friendEmails, this.state.email
          ]})
    }
    this.setState({email: ''})
  }
  render() {
    const { name, startDate,endDate, startingCity } = this.state;
    const {friendEmails} = this.state;
    return (
      <div>
           <Header2/>
        <div className="createTrip-container">
          <div class="createTrip-inner-container">
            <h1 className="createTrip-inner-container">
            Trip Details
            </h1>
          </div>
          <div >
            <form onSubmit={this.onSubmit} >
                
              <div class="form-group">
                <label for="name">Name your trip:</label>
                <input required type="text" className="form-control " name="name" value={name} onChange={this.onChange} placeholder="name" />
              </div>
              
              
              <div class="form-group">
                <label for="startDate">Start Date:</label>
                <input required type="date" className="form-control" name="startDate" onChange={this.onChange} placeholder="startdate" ></input>
              </div>
             
              <div class="form-group">
              <label for="endDate">End Date:</label>
                <input required type="date" className="form-control" name="endDate" onChange={this.onChange} placeholder="enddate" ></input>
              </div>
              <br></br>
              <label htmlFor="emails">Invite your friends:</label>
<input
  value = {this.state.email}
  className="airline-input"
  id="emails"
  name="emails"
  onChange={this.handleEmailChange} placeholder="abc@gmail.com"
/>

<button  onClick = {this.addFriend} className="button center-loading" >+</button>
{
friendEmails.map(friend =>{
  return (
          <h2 key={friend}>{friend}</h2>
          )
})
}
              <br></br>
              <br></br>
              <div class="form-group">
              <label for="startingCity">Where are you flying from?:</label>
                <input type="text" class="form-control" name="startingCity" onChange={this.onChange} placeholder="startingCity" ></input>
              </div>
            <button type="submit" className="button center-loading" onSubmit={this.onClick}>
              Invite your friends!
                </button>
                
              <br></br>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default createTrip;

