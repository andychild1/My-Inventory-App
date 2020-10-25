import React from 'react';

class Input extends React.Component {
    render() {
        return(
            <div>
                <input onFocus={this.props.focus} onChange={this.props.onChange} type="text" placeholder="add items..." />
                <br />
                <button onClick={this.props.onClick} >Add</button>
            </div>
        );
    }
};

export default Input;