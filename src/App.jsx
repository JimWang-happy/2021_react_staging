import React, { Component } from 'react'
import axios from "axios";

export default class App extends Component {

  getStudentsInfo = ()=>{
    axios.get('http://localhost:3000/api/students').then((res)=>{
      console.log(res.data)
    }, (err)=>{
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentsInfo}>点我获取学生信息</button>
      </div>
    )
  }

}
