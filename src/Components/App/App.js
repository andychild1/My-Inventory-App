import React from 'react';
import './App.css';
import Input from '../Input/Input';
import List from '../List/List';
import MyApi from '../../util/MyApi';
import ListName from '../ListName/ListName';
import LogOut from '../LogOut/LogOut';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      list: [],
      name: '',
      listName: [],
      id: this.props.user.sub,
      email: this.props.user.email,
      nickname: this.props.user.nickname
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItems = this.addItems.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.saveListName = this.saveListName.bind(this);
    this.addListName = this.addListName.bind(this);
    this.showList = this.showList.bind(this);
    this.removeListName = this.removeListName.bind(this);
        this.loadApi = this.loadApi.bind(this);
  }

  handleInput(event) {
    this.setState({input: event.target.value});
  }

  addItems() {
    let list = this.state.list;
    let input = this.state.input;
    if (list.find(currentItem => currentItem === input)) {
      return;
    } else if (!input) {
      return;
    }
    list.push(input);
    this.setState({list: list, input: ''});
  }

  removeItem(items) {
    let list = this.state.list;
    list = list.filter(item => item !== items );
    this.setState({list: list});
  }

  clearInput(e) {
    e.target.value = '';
  }

  saveListName(event) {
    this.setState({name: event.target.value});
  }

  addListName() {
    let name = this.state.name;
    let list = this.state.list;
    let id = this.state.id;
    let listName = this.state.listName;
    let myList = list.join(',');
    if (!name) {
      return;
    }
    listName.push({id: id, name: name, items: myList});
    MyApi.saveList(id, name, listName[listName.length -1].items);
    this.setState({listName: listName, list: []});
  }

  showList(value) {
    let arr = value.split(',');
this.setState({list: arr});
  }

removeListName(value) {
  let savedName = this.state.listName;
  savedName = savedName.filter(name => value !== name.name);
  MyApi.delete(this.state.id);
  console.log(value)
  this.setState({listName: savedName});
}



loadApi() {
    MyApi.getList(this.state.id).then(jsonResponse => {
      this.setState({listName: jsonResponse});
    });
}
  

  render() {

return (
    <div className="App">
      <h1>My Inventory</h1>
      <div className="loadButton">
        <h5>Load saved list</h5>
      <button onClick={this.loadApi} >Load</button>
      </div>
      <div className="logOutButton">
        <h5>Welcome {this.state.nickname}</h5>
        <LogOut />
      </div>
      <ListName onRemove={this.removeListName} listItems={this.state.listName} show={this.showList} addList={this.addListName} save={this.saveListName}  name={this.state.name} />
      <Input focus={this.clearInput} onChange={this.handleInput} onClick={this.addItems} />
      <h3>{this.state.input}</h3>
      <List remove={this.removeItem} items={this.state.list} />
    </div>
   );
  };
  

componentWillUnmount() {
  this.setState({
    input: '',
    list: [],
    name: '',
    listName: [],
    loginStatus: ''
  });
}

};

export default App;
