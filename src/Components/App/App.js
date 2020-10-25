import React from 'react';
import './App.css';
import Input from '../Input/Input';
import List from '../List/List';
import MyApi from '../../util/MyApi';
import ListName from '../ListName/ListName';
import Register from '../Register/Register';
import Login from '../Login/Login';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      list: [],
      name: '',
      listName: [],
      isLogged: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItems = this.addItems.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.loadApi = this.loadApi.bind(this);
    this.saveListName = this.saveListName.bind(this);
    this.addListName = this.addListName.bind(this);
    this.showList = this.showList.bind(this);
    this.removeListName = this.removeListName.bind(this);
    this.logUser = this.logUser.bind(this);
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
    let listName = this.state.listName;
    if (!name) {
      return;
    }
    listName.push({name: name, items: list});
    MyApi.save(name, list);
    this.setState({listName: listName, list: []});
    console.log(listName);
  }

  loadApi() {
    MyApi.getList().then(jsonResponse => {
      this.setState({listName: jsonResponse});
    });
  }

  showList(value) {
this.setState({list: value});
  }

removeListName(value) {
  let savedName = this.state.listName;
  savedName = savedName.filter(name => value !== name.name);
  this.setState({listName: savedName});
  MyApi.delete(value);
}

logUser() {
  this.setState({isLogged: true});
}

  render() {

    if (this.state.isLogged) {
return (
    <div className="App">
      <h1>My Inventory</h1>
      <ListName onRemove={this.removeListName} listItems={this.state.listName} show={this.showList} addList={this.addListName} save={this.saveListName}  name={this.state.name} />
      <Input focus={this.clearInput} onChange={this.handleInput} onClick={this.addItems} />
      <h3>{this.state.input}</h3>
      <List remove={this.removeItem} items={this.state.list} />
    </div>
   );
    } else {
      return(<div className="welcome">
          <h1>Welcome</h1>
          <Login />
          <h3>Or</h3>
           <Register isLogged={this.logUser} />
      </div>
      ) 
    }
  }
  
componentDidMount() {
  this.loadApi();
}

componentWillUnmount() {
  this.setState({
    input: '',
    list: [],
    name: '',
    listName: []
  });
}

};

export default App;
