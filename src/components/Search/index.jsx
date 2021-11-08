import React, { Component } from 'react'
import axios from "axios";

export default class Search extends Component {

  keyWordContainer = React.createRef()

  search = ()=>{
    const {current:{value}} = this.keyWordContainer;
    if (!value.trim()) {
      return alert('不能为空')
    }
    this.props.updateAppState({isFirst: false, isLoading: true, errorMsg: ''});
    axios.get(`https://api.github.com/search/users?q=${value}`).then((res)=>{
      console.log('成功', res.data.items);
      const {items} = res.data;
      this.props.updateAppState({users: items, isLoading: false});
    }).catch((err)=>{
      console.log('失败', err);
      this.props.updateAppState({isLoading: false, errorMsg: err.message});
    })
  }

  render() {
    return (
      <section>
        <h3>Search Githu Users</h3>
        <div>
          <input type="text" ref={this.keyWordContainer} placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
