import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  checkTodo = (id)=>{
      return (event)=>{
        console.log(id, event.target.checked);
        const {checked} = event.target;
        this.props.updateTodo(id, checked);
      }
  }

  handleDelete = (id)=>{
    return ()=>{
      if (window.confirm('確定刪除嗎？')) {
        this.props.deleteTodo(id);
      }
    }
  }

  render() {
    const {id, name, done} = this.props;
    return (
      <li>
        <label>
          <input type="checkbox" checked={done} onChange={this.checkTodo(id)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" onClick={this.handleDelete(id)}>删除</button>
      </li>
    )
  }
}
