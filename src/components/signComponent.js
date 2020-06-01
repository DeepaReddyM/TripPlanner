import React,{Component} from 'react';
import Header from './header';
import {Button, Form, Label, Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {Parallax} from 'react-parallax';
import firebase from './Firebase/firebase';

class Signin extends Component
{
    constructor(props)
    {
    super(props);
    this.state=
    {
        firstname:'',
        lastname:'',
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

handleSubmit = e => {
	e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((resp)=>
    {
        return firebase.firestore().collection('users').doc(resp.user.uid).set(
            {
                firstname:this.state.firstname,
                lastname:this.state.lastname
            }
        )
    })
	.catch((error) => {
		this.setState({fireErrors: error.message})
	});
}

render()
{
    const image = "assets/img/sign.jpg";
    let errorNotification = this.state.fireErrors ? 
		( <div className="Error"> {this.state.fireErrors} </div> ) : null;
        return(
            
<Parallax bgImage={image}
            strength={0} className="parallel">            
            <Header/>
            <div id="signupForm" style={{height: "100vh"}}>
        <div className="modal-dialog modal-lg" role="content">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Create Account</h4>
                </div>
                <div className="modal-body">
                {errorNotification}
                    <Form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                    <Label className="sr-only" for="exampleFirstName">First Name</Label>
                                    <Input typclassNamee="email" className="form-control form-control-sm mr-1" id="exampleFisrtName" name="firstname" placeholder="First Name" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-sm-6">
                                <Label className="sr-only" for="exampleLastName">Last Name</Label>
                                <Input type="text" className="form-control form-control-sm mr-1" id="exampleLastName" name="lastname" placeholder="Last Name" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-row col-sm-6">
                                <Label className="sr-only" for="exampleInputEmail">Email</Label>
                                <Input type="text" className="form-control form-control-sm mr-1" id="exampleInputEmail" name="email" placeholder="Enter Email" onChange={this.handleChange}/>
                            </div>
                            <br></br>
                            <div className="form-row col-sm-6">
                                <Label className="sr-only" for="exampleInputPassword3">Password</Label>
                                <Input type="password" className="form-control form-control-sm mr-1" id="exampleInputPassword3" name="password" placeholder="Password" onChange={this.handleChange}/>
                            </div>
                            <br></br>
                            <div className="form-row col-sm-auto">
                                <div className="form-check">
                                    <Input className="form-check-input" type="checkbox"/>
                                    <Label className="form-check-label" > I Agree to the Terms and Conditions
                                    </Label>
                                </div>
                            </div>
                            <br></br>
                        <div className="form-row">
                            <Button type="submit" className="btn btn-primary btn-md ml-1">Sign up</Button>


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
export default Signin;