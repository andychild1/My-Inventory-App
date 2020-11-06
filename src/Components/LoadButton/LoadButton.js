import React from 'react';
import './LoadButton.css';

const LoadButton = (props) => {

    return (
        <div className="loadButton">
        <h5>Load saved list, <br/>click on a list name to update your list</h5>
      <button className="load" onClick={props.onLoad} >Load</button>
      </div>
    );
};

export default LoadButton;