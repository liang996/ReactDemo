import React, { Component } from 'react'
//更新部分
class LifeCycle1 extends Component {
 constructor(props) {
  super(props)
  this.state = {
   msg: '我是一个msg数据'
  }
 }

 //是否要更新数据，如果返回true才会更新数据
 shouldComponentUpdate(nextProps, nextState) {
  console.log('01是否要更新数据')
  console.log('shouldComponentUpdate---组件发生改变前执行')

  console.log(nextProps)		//父组件传给子组件的值，这里没有会显示空
  console.log(nextState)		//数据更新后的值
  return true;				//返回true，就同意组件更新;返回false,就反对组件更新。
 }
 //将要更新数据的时候触发的
 componentWillUpdate() {
  console.log('02组件将要更新,如果shouldComponentUpdate返回false，这个函数就不会被执行了。')
 }
 //更新数据时候触发的生命周期函数
 componentDidUpdate() {
  console.log('04组件更新完成')
 }
 //更新数据
 setMsg() {
  this.setState({
   msg: '我是改变后的msg数据'
  })
 }
 render() {
  console.log('03数据渲染render')
  return (
   <div>
    {this.state.msg}
    <br />
    <hr />
    <button onClick={() => this.setMsg()}>更新msg的数据</button>
   </div>
  )
 }
}
export default LifeCycle1
