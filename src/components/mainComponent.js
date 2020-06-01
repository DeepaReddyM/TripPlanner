import React,{Component} from 'react';
import { BrowserRouter,Route,NavLink,Switch,Redirect } from 'react-router-dom';

import Home from './homeComponent';
import Login from './loginComponent';
import Signin from './signComponent';
import Welcome from './welcome';
import Logout from './logout';
import CreateTrip from './createTrip';
import PlanTrip from './planTrip';
import AddEvent from './addevent';
import Event from './event';
import Chat from './chat';
import Chatbox from './Chatbox';
import Pinned from './Pinned';
import Trip from './trip';
//import Bot from './bot';
import Login1 from './logsign';
import Sign from './logsign2';
//export {default as AddEvent} from './addevent';
//export {default as Event} from './event';
import firebase from './Firebase/firebase';
class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            user:null
        }
    }
    componentDidMount()
    {
        firebase.auth().onAuthStateChanged(user=>
            {
                this.setState({user});
            });
    }
    render()
    {
        return(
            <div>
            <Switch>
              <Route path='/home' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signin}/>
              <Route exact path='/welcome' component={Welcome}/>
              <Route exact path='/logout' component={Logout}/>
              <Route exact path='/createtrip' component={CreateTrip}/>
              <Route exact path='/plantrip' component={PlanTrip}/>
              <Route exact path='/addevent' component={AddEvent}/>
              <Route exact path='/event' component={Event}/>
              <Route exact path='/chat' component={Chat}/>
              <Route exact path='/chatbox' component={Chatbox}/>
              <Route exact path='/pinned' component={Pinned}/>
              <Route exact path='/trip' component={Trip}/>
              <Route exact path='/login1' component={Login1}/>
              <Route exact path='/sign' component={Sign}/>
             
              <Redirect to="/home" />
          </Switch>
          </div>
        );
    }
}

export default Main;
