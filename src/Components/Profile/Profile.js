import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import App from '../../Components/App/App';

const Profile = () => {
    const { user } = useAuth0();
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
         <div>
             <App user={user}/>
         </div>
        )
    );
};

export default Profile;