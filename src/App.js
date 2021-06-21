import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      monsters: [], 
      searchField: '',
      title: ''

    }
  }
  handleChange = (e) => {
    this.setState({'searchField': e.target.value, 'title': e.target.value})
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').
    then(response => response.json()).
    then(users => this.setState({monsters: users}));
  }
  
render() {
const {searchField , monsters, title} = this.state; 
const searchFilter = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
return  (<div className = "App">
<h1>{title}</h1>
<SearchBox placeholder = 'monster search'  handleChange = {this.handleChange} />
  <CardList monsters = {searchFilter}/>
  </div>)
}

}

  


export default App;
