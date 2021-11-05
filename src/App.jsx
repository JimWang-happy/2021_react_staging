import React, {Component} from "react"
// import Weather from './components/Weather'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {todos: [
    {id: '001', name: '抽煙', done: true},
    {id: '002', name: '喝酒', done: false},
    {id: '003', name: '燙頭', done: true}
  ]}
  addTodo = (todoObj)=>{
    console.log(todoObj);
    const {todos} = this.state;
    this.setState({todos: [todoObj, ...todos]});
  }
  render() {
    return (
      <div className="todo-container">
        {/* <Weather/> */}
        <Add addTodo={this.addTodo}/>
        <List todos={this.state.todos}/>
        <Footer/>
      </div>
    )
  }
}
