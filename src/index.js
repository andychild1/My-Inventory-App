import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from '../src/Components/AppContainer/AppContainer';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.render(
  process.env.NODE_ENV === 'production' && (
  <Auth0Provider 
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}
  >
  <AppContainer />
    </Auth0Provider>,
  
  document.getElementById('root')
  )
);
