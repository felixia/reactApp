import React, { Component } from 'react';
import {Grid, Jumbotron, Button} from 'react-bootstrap';
import Login from './Login';
import SignUp from './SignUp';




class Home extends Component {
    constructor(){
        super();
        this.state = {
            signup:false,
            login:true
        }

    }

    switch(){
        var signup = this.state.signup;
        var login = this.state.login;
       return this.setState({
            signup:!signup,
           login:!login

        });

    }

render(){
    return (

        <div>
            <Jumbotron>
                <Grid>
                    <h1 className="text-center">Video Portal</h1>
                    <p className="text-center">Welcome to Crossover Video Portal.</p>
                </Grid>
            </Jumbotron>
            <div className="text-center">
                <ul className="list-inline">
                    <li><Button className="text-muted"  data-toggle="tab" onClick={this.switch.bind(this)}>Login</Button></li>
                    <li><Button className="text-muted"  data-toggle="tab" onClick={this.switch.bind(this)} >Register</Button></li>
                </ul>
            </div>
            {this.state.signup ? <SignUp/> : null}
            {this.state.login ? <Login/> : null}


        </div>
    );
}
}
export default Home;
