import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    //submit method to ensure fields are true, then I can send the data to the server
    submit() {
        let username = this.state.username;
        let password = this.state.password;
        if (!username || !password) {
            alert('enter a username and password');
        } else {
            this.props.isLogged();

        }
    }

    render() {
        return(
            <div>
                <h3>Create a new account</h3>
                <input onChange={this.handleUsername} type="text" placeholder="username" />
                <input onChange={this.handlePassword} type="password" placeholder="password" />
                <button onClick={this.submit} >Submit</button>
            </div>
        )
    }
};

export default Register;