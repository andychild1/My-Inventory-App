import React from 'react';
import './logOut.css';
import { useAuth0 } from '@auth0/auth0-react';

const LogOut = (props) => {

        const { logout, isAuthenticated } = useAuth0();

        return(
            isAuthenticated && (
                <div className="logOutButton">
                <h5>Welcome {props.nickname}</h5>
            <button className="logOut"onClick={() => logout()}>
                Log Out
            </button>
            </div>
            )
        );
};

export default LogOut;