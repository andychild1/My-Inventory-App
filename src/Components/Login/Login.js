import React from 'react';
import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {

        const { loginWithRedirect, isAuthenticated } = useAuth0();

        return(
            !isAuthenticated && (
                <div className="login">
                 <h1>Welcome to my Inventory App</h1>
             <h1>Click Start to sign up</h1>
            <button className="start" onClick={() => loginWithRedirect()}>
                START
            </button>
            </div>
            )
        );
};

export default Login;