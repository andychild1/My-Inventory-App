import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

        handleUsername(e) {
            this.setState({username: e.target.value});
        }

        handlePassword(e) {
            this.setState({password: e.target.value});
        }

        submit() {
           let username = this.state.username;
           let password = this.state.password;
        }

    render() {
        return(
            <div>
                <h3>Login</h3>
                <input onChange={this.handleUsername} type="text" placeholder="username" />
                <input onChange={this.handlePassword} type="password" placeholder="password" />
                <button>Submit</button>
            </div>
        );
    }
};

export default Login;