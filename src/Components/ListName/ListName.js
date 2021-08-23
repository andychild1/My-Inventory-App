import React from 'react';
import './ListName.css' ;

class ListName extends React.Component {

click = (value) => {
 this.props.show(value);
}

    render() {
        return(
            <div className="list">
                <input className="inputSave" onChange={this.props.save} type="text" placeholder="save list as..." /> <br /><button className="saveList" onClick={this.props.addList} >Save</button>
              <ul>
                  {
                      this.props.listItems.map((value, i) => <div key={i}><button className="buttonList" onClick={() => this.props.onRemove(value.name)}>-</button> <li className="listName" onClick={() => this.click(value.items)} key={i} >{value.name}</li></div>)
                  }
              </ul>
            </div>
        );
    }};

export default ListName;