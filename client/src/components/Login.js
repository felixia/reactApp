import React from 'react';
import { Button } from 'react-bootstrap';
import '../index.css';
import users from '../../../controllers/users';




class Login extends React.Component {
constructor(){
    super();
    this.state = {
        username:"",
        password: "",
        videos: []
    };
}





    handleUsernameChanged(e){
        this.setState({
           username: e.target.value
        });

    }

    handlePasswordChanged(e){
        this.setState({
            password: e.target.value

        });

    }

    submitForm(e){
      e.preventDefault();
     var un =this.refs.username.value;
     var pw = this.refs.password.value;
fetch('/user/auth', users.auth).then(data => data.json);


        // fetch('/videos').then(data => data.json)
        //     .then(json => {
        //         this.setState({videos:json});
        //     });


    }

    render(){
        var videos =this.state.videos;
        // videos = videos.map((video, index) => {
        //     return (
        //         <li key={index}>
        //             <span>{video.obj.name}</span>
        //         </li>
        //     )
        // });
        return(
            <div className="container">
                <div id="login" className="tab-pane active">
                    <form className="form-signin" onSubmit={this.submitForm.bind(this)}>
                        <p className="text-muted text-center btn-block btn btn-primary btn-rect">
                            Enter Your Username and Password
                        </p>
                        <input
                            className="form-control"
                            required
                            type="text"
                            value ={this.state.username}
                            ref="username"
                            onChange={this.handleUsernameChanged.bind(this)}
                            placeholder="Enter Username"
                        />
                        <input
                            className="form-control"
                            required
                            type="password"
                            value ={this.state.password}
                            ref="password"
                            onChange={this.handlePasswordChanged.bind(this)}
                            placeholder="Enter password"

                        />
                        <Button type="submit"  className="btn text-muted text-center btn-danger" >Login</Button>
                    </form>
                        <li>{videos}</li>

                </div>



            </div>
        )
    }


}
export default Login;
