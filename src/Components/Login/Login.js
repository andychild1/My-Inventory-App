import React from 'react';
import './Login.css';
import CookieConsent from "react-cookie-consent";
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {

        const { loginWithRedirect, isAuthenticated } = useAuth0();

        return(
            !isAuthenticated && (
                <div className="login">
                 <h1>Welcome to my Inventory App</h1>
             <h1>Start to sign up</h1>
            <button className="start" onClick={() => loginWithRedirect()}>
                START
            </button>
            <CookieConsent enableDeclineButton flipButtons
            location="bottom"
            declineButtonText="Decline"
            buttonText="Accept"
            cookieName="myAwesomeCookieName2"
            style={{ background: "black", color: "gold", padding: 10, fontSize: "18px" }}
            buttonStyle={{background: "darkviolet", color: "gold", fontSize: "13px" }}
            expires={150}
            >This website uses cookies to enhance the user experience.</CookieConsent>
            </div>
            )
        );
};

export default Login;