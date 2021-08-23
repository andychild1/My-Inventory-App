import React from 'react';
import './Footer.css';
import git from '../../../src/gitIcon.png';

const Footer = () => {
    return (
        <div className="foot">
        <footer>
     Copyright © 2020 A.T. Web Dev. All Rights Reserved
    </footer>
    <p>Follow me on gitHub
        <a href="https://github.com/andychild1" target="_blank" rel="noopener noreferrer">
    <img className="gitIcon" src={git} alt="gitLogo" />
    </a>
    </p>
    </div>
    );
};

export default Footer;