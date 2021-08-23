import React from 'react';
import './input.css';

class Input extends React.Component {
    render() {
        return(
            <div>
                <input className="inputItem" onFocus={this.props.focus} onChange={this.props.onChange} type="text" placeholder="add items..." />
                <br />
                <button className="addButton" onClick={this.props.onClick} >Add</button>
            </div>
        );
    }
};

export default Input;