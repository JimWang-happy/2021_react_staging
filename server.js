const exxpress = require('express')
const app = exxpress()
app.use((request, response, next)=>{
  console.log('有人请求服务器了')
  // console.log('请求来自于：', request.get('Host'))
  console.log('请求的地址：', request.url)
  next()
})
app.get('/students', (req, res)=>{
  const stus = [{name: '老刘', age: 18}, {name: '强哥', age: 16}]
  res.send(stus)
})
app.listen(5000, (err)=>{
  if (!err) {
    console.log('服务器OK!地址为http://localhost:5000/students.')
  }
})