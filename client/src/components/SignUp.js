import React from 'react';
import { Button } from 'react-bootstrap';
import '../index.css';

class SignUp extends React.Component {
    render(){
        return(
            <div className="container">
                <div id="forgot" className="tab-pane">
                    <form className="form-signin">
                        <p className="text-muted text-center btn-block btn btn-primary btn-rect">Registration Form</p>
                        <input type="text" required name="username" placeholder="Username" className="form-control"/>
                        <input type="password" name="password" required placeholder="Password" className="form-control"/>
                        <input type="password" name="confirm_password" required placeholder="Confirm Password" className="form-control"/>
                        <input type="email" name="email" required="required" placeholder="Your E-mail" className="form-control"/>
                        <br/>
                        <Button type="button" className="btn text-muted text-center btn-danger" >Register</Button>

                    </form>

                </div>


            </div>
        )
    }

}
export default SignUp;
