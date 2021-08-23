
import React from 'react';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import './AppContainer.css';

const AppContainer = () => {


    return( 
         <div className="Firstlogin" >
             <Login />
             <Profile />
             <Footer />
         </div>

      );
};

export default AppContainer;
