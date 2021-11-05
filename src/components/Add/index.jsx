import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './index.css'

export default class Add extends Component {

  handleKeyUp = (event)=>{
    const {value:name} = event.target;
    if (event.keyCode !== 13) return;
    if (name.trim() === '') return alert('不能為空');
    console.log(name);
    const todoObj = {id: uuidv4(), name: name, done: false};
    this.props.addTodo(todoObj);
    event.target.value = '';
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车确定"/>
      </div>
    )
  }
}
