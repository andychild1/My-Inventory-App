import React from 'react';
import MyApi from '../../util/MyApi';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            status: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.submitNew = this.submitNew.bind(this);
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    //submit method to ensure fields are true, then I can send the data to the server
    submitNew() {
        let username = this.state.username;
        let password = this.state.password;
       MyApi.saveUser(username, password).then(jsonResponse => {
           this.setState({status: jsonResponse.message});
       })
    }

    render() {
        return(
            <div>
                <h3>Create a new account</h3>
                <h4>{this.state.status}</h4>
                <input onChange={this.handleUsername} type="text" placeholder="username" />
                <input onChange={this.handlePassword} type="password" placeholder="password" />
                <button onClick={this.submitNew} >Register</button>
            </div>
        )
    }
};

export default Register;