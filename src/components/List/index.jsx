import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users, isFirst, isLoading, errorMsg} = this.props;
    return (
      <div className="row">
        {
          isFirst ? <h1>欢迎使用！</h1> :
          isLoading ? <h1>Loding......</h1> :
          errorMsg ? <h1>{errorMsg}</h1> :
          users.map((userObj)=>{
            return (
              <div className="card" key={userObj.id}>
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img src={userObj.avatar_url} alt="avatar_user" style={{width: '100px'}}/>
                </a>
                <p>{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
