import React,{Component} from 'react';
import {Button, Form, Label, Input } from 'reactstrap';
import Header from './header';
import {Parallax} from 'react-parallax';
import {NavLink} from 'react-router-dom';
import firebase from './Firebase/firebase';

class Login extends Component
{
    constructor(props)
    {
    super(props);
    this.state=
    {
        email: '',
        password: '',
        fireErrors: '',
        loginBtn: true
    };
}

    handleChange=(e)=>
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit=(e)=>
    {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }
render()
{
    const image2 = "assets/img/login.jpg";
    let errorNotification = this.state.fireErrors ? 
		( <div className="Error"> {this.state.fireErrors} </div> ) : null;
        return(
            <Parallax bgImage={image2}
            strength={0} className="parallel">
                <Header/>
<div className="loginForm" style={{height: "100vh"}}>
        <div className="modal-dialog modal-lg" role="content">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Login</h4>
                </div>
                <div className="modal-body">
                {errorNotification}
       
                    <Form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                    <Label className="sr-only" for="email">Email address</Label>
                                    <Input typclassNamee="email" className="form-control form-control-sm mr-1" id="email" name="email" placeholder="Enter email" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-sm-6">
                                <Label className="sr-only" for="password">Password</Label>
                                <Input type="password" className="form-control form-control-sm mr-1" id="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                                <div className="form-check col-sm-4">
                                    <Input className="form-check-input" type="checkbox"/>
                                    <Label className="form-check-label"> Remember me
                                    </Label>
                                </div>
                        </div>

                        <div className="form-row">
            <Button type="submit" name="loginBtn" className="btn btn-primary btn-md ml-1">Log in</Button>
            
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    </Parallax>
        );
    }
}

export default Login;

/*
<NavLink  to="/welcome"></NavLink>
*/