import React, { Component } from 'react'
//挂载部分

class LifeCycle extends Component {
 constructor(props) {
  console.log('01构造函数')
  super(props)
  this.state = {

  }
 }
 //组件将要挂载时候触发的生命周期函数
 componentWillMount() {
  console.log('02组件将要挂载')
 }
 //组件挂载完成时候触发的生命周期函数
 componentDidMount() {
  console.log('04组件将要挂载')
 }
 render() {
  console.log('03数据渲染render')
  return (
   <div>
    生命周期函数演示
   </div>
  )
 }
}
export default LifeCycle
