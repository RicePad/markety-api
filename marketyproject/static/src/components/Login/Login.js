import React, { Component, Fragment } from 'react';
import { withCookies } from 'react-cookie';
import classes from './Login.module.css';



class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoginView: true
    }
    

    inputChanged = (event) => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred})

    }
    
    loginHandler = (event) => {
        event.preventDefault()
        const API_LOGIN_ENDPOINT = 'http://localhost:3000/auth/';
        const API_USER_ENDPOINT = 'http://localhost:3000/api/v1/users/';

        if(this.state.isLoginView) {
            fetch(API_LOGIN_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
                }).then( resp => resp.json())
                .then( res => {
                    console.log('successful-login-cookies:', res.token);
                    this.props.cookies.set('mr-token', res.token);
                    window.location.href = "/react-view";

                })
                .catch( error => console.log(error))
        } else {
            fetch(API_USER_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.credentials)
                }).then( resp => resp.json())
                .then( res => {
                    this.setState({isLoginView: true});
                    console.log(res)
                })
                .catch( error => console.log(error))
        }
    } 

    toggleView = () =>{
        this.setState({isLoginView: !this.state.isLoginView});
        status = this.state.isLoginView
        console.log('status:', status)
    }

    render(){
        
        return(
            <Fragment>
                <div className={classes.loginContainer}>
                <h1>
                  { this.state.isLoginView ? 'Login' : 'Register'}
                </h1>
                    <span>Username</span><br/>
                    <input type="text" name="username" value={this.state.credentials.username}
                        onChange={this.inputChanged}/><br/>
                    <span>Password</span><br/>
                        <input type="password" name="password" value={this.state.credentials.password}
                            onChange={this.inputChanged}/><br/>
                    <button onClick={this.loginHandler}>
                        { this.state.isLoginView ? 'Login' : 'Register'}
                    </button>
                    <p onClick={this.toggleView}>
                        { this.state.isLoginView ? 'Create Account' : 'back to login'}
                    </p>
                </div>
            </Fragment>
    
        )
        




    }
}

export default withCookies(Login);