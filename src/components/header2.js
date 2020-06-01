import React,{Component} from 'react';
import { Navbar} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header2 extends Component
{
    render()
    {
        return(
            <Navbar dark className="purple">
            <div className="container">
              <img src="assets/img/tripineree.PNG" width="200px" className="align-self-center ml-0"/>
              <NavLink to="/logout" className="login-btn1"><span class="fa fa-sign-out"></span>Logout</NavLink>
          </div>
          </Navbar>
        );
    }
}

export default Header2;