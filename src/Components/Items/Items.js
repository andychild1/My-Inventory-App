import React from 'react';
import './Items.css';
class Items extends React.Component {
    constructor(props) {
        super(props);

        this.removeItems = this.removeItems.bind(this);
    }

removeItems() {
    this.props.remove(this.props.names);
}

    render() {
        return(
            <div className="divList">
              <button className="itemButton" onClick={this.removeItems} > - </button> <h3 className="item" >{this.props.names}</h3 >
            </div>
        );
    }
};

export default Items;