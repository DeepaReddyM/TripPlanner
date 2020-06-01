import React, {Component} from 'react';
//import { db } from '../fire'
import PlanTrip from './planTrip';
import Pinned from './Pinned';
import Chatbox from './Chatbox';
import Header2 from './header2';

class Trip extends Component {

    constructor(props){
        super(props)
        this.state = {
            tripId: props.match.params.tripId,
            isPartOfTrip: true,
            startDate: {},
            endDate: {},
            name: '',
            showInvite: false,
            numOfUsers: 0
        }
       // this.sendInvite = this.sendInvite.bind(this);
    }

 
    render(){
        //const tripRef = db.collection('trips').doc(this.state.tripId);
        let isPartOfTrip = this.state.isPartOfTrip;
        return (
            (isPartOfTrip ?
          
                <div>
                    <Header2/>
                    <br></br>
                    <div className="row">
                        <br></br>
                        <div className="col-sm-8">
              <PlanTrip/>
              </div>
            
              </div>
              <Chatbox/>
            </div>
            :
            <div>
                You need to be invited to this trip!
            </div>)
        )
    }
}

function getTrue(obj){
    let truthy = 0;
    for (var person in obj) {
        if (obj[person]) truthy++}
    return truthy;
 }

 export default Trip;


 