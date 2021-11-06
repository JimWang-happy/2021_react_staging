import React, { Component } from 'react'
import Item from "../Item";

export default class List extends Component {
  render() {
    const {todos, deleteTodo, updateTodo} = this.props;
    return (
      <ul className="todo-main">
        {
          todos.map((todo, index)=>{
            return <Item key={todo.id} {...todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
          })  
        }
      </ul>
    )
  }
}
