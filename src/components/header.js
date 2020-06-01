import React,{Component} from 'react';
import { Navbar} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component
{
    render()
    {
        return(
            <Navbar dark className="purple">
            <div className="container">
              <img src="assets/img/tripineree.PNG" width="200px" className="align-self-center ml-0"/>
              <NavLink  to="/login1" className="login-btn"><span class="fa fa-sign-in"></span>Login</NavLink>
              <NavLink to="/sign" className="login-btn1"><span class="fa fa-sign-in"></span>Signup</NavLink>
          </div>
          </Navbar>
        );
    }
}

export default Header;