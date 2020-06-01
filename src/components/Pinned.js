import React from 'react';
//import {db} from '../fire';
import Event from './event';

export default class Pinned extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: [],
            itineraryStatus: false,
            time: null,
            }
        }

  

    render() {
        return (
            <div className="col-md">
                <h3>Pinned Events</h3>
                <div className="pin-wrap event-scroll">
                    <Event/>
                   
                </div>
            </div>
        );
    }
}
 


/*<div className="col-md-6">
                <h3>Pinned Events</h3>
                <div className="pin-wrap event-scroll">{this.state.events.map((event, index) => {
                    const pinned = !event.data().itineraryStatus;
                    return pinned && <Event room={this.props.room} key={event.id} {...event.data() } eventId={event.id} event={event} userId={this.props.user.uid} displayName={this.props.user.displayName} />;
                })}</div>
            </div>*/