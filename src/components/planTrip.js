import React,{Component} from 'react';
import Event from './event';
import AddEvent from './addevent';
//import {Event, AddEvent} from './mainComponent';
import Moment from 'moment';
//import Chatbox from './Chatbox';
import { extendMoment } from 'moment-range';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import firebase from './Firebase/firebase';
import CreateTrip from './createTrip';
const moment = extendMoment(Moment);
function tripDates(startDate, endDate){
  var dateArray = [];
  var currentDate = moment(startDate);
  var endDate = moment(endDate);
  while (currentDate <= endDate) {
      dateArray.push( moment(currentDate).format('DD-MM-YYYY') )
      currentDate = moment(currentDate).add(1, 'days');
  }
  return dateArray;

}



 class PlanTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      startDate:'',
      endDate:'',
      showAdd: false,
      trip:null,
      itineraryStatus:true,
      events:[],
      time1:'',
      date1:new Date(),
      name1:''
    };
    this.handleAddButton = this.handleAddButton.bind(this);
  }

  componentDidMount() {
    let app=this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
         var auth=firebase.auth();
    let userRef=firebase.firestore().collection('trips').doc(auth.currentUser.uid);
    userRef.get().then((doc)=>
    {
        const trip=doc.data();
        app.setState(
          {
            startDate:trip.startDate,
            endDate:trip.endDate
          });
      
    });
      } else {
        // No user is signed in.
      }
    });
  }
  
  
  handleAddButton(name, time,date){
    this.setState({showAdd: !this.state.showAdd,
      events:
      {
  name1:name,
  date1:date,
  time1:time
      }
    });
   

  }

  render() {
    const now = (new Date()).toDateString();
    const {startDate,endDate,time1,date1,name1,events,itineraryStatus}=this.state;
   const dates = tripDates(startDate,endDate);
   const eventDate = moment(events['date1']).format('DD-MM-YYYY');
    return (
      <div>
      <div className="col-md-12">
        <div className="itin-header" onLoad={this.onLoad}>
          <h3>Itinerary</h3>
          <i className="fa fa-plus-square" onClick={() => {this.setState({showAdd: !this.state.showAdd})}} />
        
        </div>
        {this.state.showAdd &&
          <AddEvent
            
            closeForm={this.handleAddButton} />}
           
           <div className="event-scroll">
            
             {
          dates.map((date, index) => (
            <div className={`date-box ${date === now ? 'today' : ''}`} key={index} >
              <p className="date-text">{date}</p>
              <div className="col-sm-9">
            {
              (eventDate === date)&&
                <div><ul>
                  <li>{events['name1']}  @{events['time1']}</li>
                  </ul>
                
                </div>
            }
                
              </div>
            </div>
          ))
        }</div>



        
      </div>
    
      </div>
    );
  }
}

export default PlanTrip;
