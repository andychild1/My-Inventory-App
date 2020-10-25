import React from 'react';
import Items from '../Items/Items';

class List extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    {
                      this.props.items.map(item => {
                      return  <Items remove={this.props.remove} key={item} names={item} />
                      })
                    }
                </ul>
            </div>
        );
    }
};

export default List;