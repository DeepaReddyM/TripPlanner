
import React, {Component} from 'react'
import {Form,Button } from 'reactstrap';
import Header2 from './header2';
import {NavLink} from 'react-router-dom';
import {Parallax} from 'react-parallax';
class Welcome extends Component {
 

  render(){
    const image = "assets/img/trip.jpg";
    return (
        <div id="Welcome">
           <Parallax 
            strength={0} className="parallel">    
        <Header2/>
        
            <h1 className="modal-title" style={{ color: 'green' }}>Welcome</h1>
            <br></br>
                    <Form className="container">
                        <div className="form-row ">
                            <div className="form-group col-sm-6">
                                <h4>Plan the ultimate group vacation with Tripineree</h4>
                            </div>
                            <img src="assets/img/wel.png" width="200px"  align="right"/>
                            <div className="form group col-sm-12">
                            
                            <NavLink  to="/createtrip"><Button type="submit" className="btn btn-secondary btn-md ml-1">Create Trip</Button></NavLink>
                            </div>
                         </div>
                   <br>
                   </br>
                   <br></br>
                   <br></br>
                   <br></br>
                   <br></br>
         <div className="form-row ">
                        
          <h2 className="raleway light-blue col-sm-3">Upcoming Trips</h2>
          <div className="flex-start col-sm-12">
          {
            <p>You have no upcoming trips scheduled.</p>
          }
          </div>
        </div>
        <br />
        <br></br>
        <div className="form-row ">
          <h2 className="raleway light-blue col-sm-3">Past Trips</h2>
          <div className="flex-start col-sm-12">
          {
            <p>You haven't been on any trips yet.</p>
          }
        </div>
        </div>
        </Form>
        </Parallax>
                </div>
           

            );
  }
}


  export default Welcome;