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

  deleteTodo = (id)=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id;
    });
    this.setState({todos: newTodos});
    // 盡量別改變原數組
    // todos.splice(index, 1);
    // this.setState({todos: todos});
  }

  updateTodo = (id, done)=>{
    const {todos} = this.state;
    const updateTodos = todos.map((todo, index)=>{
      if (todo.id === id) {
        todo.done = done;
      }
      return todo;
    });
    this.setState({todos: updateTodos});
  }

  checkAll = (done)=>{
    const {todos} = this.state;
    const newTodos = todos.map((todoObj)=>({...todoObj, done}));
    this.setState({todos: newTodos});
  }

  clearAllDone = ()=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done;
    });
    this.setState({todos: newTodos});
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        {/* <Weather/> */}
        <Add addTodo={this.addTodo}/>
        <List todos={todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>
        <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
      </div>
    )
  }

}
