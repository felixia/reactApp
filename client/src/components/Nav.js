
import React, { Component } from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from './AuthService';
import '../index.css';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">crossover video portal</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Food Jokes</Link>
                    </li>
                    <li>
                        {
                            ( isLoggedIn() ) ? <Link to="/special">Videos</Link> :  ''
                        }

                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        {
                            (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;