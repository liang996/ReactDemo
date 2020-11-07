import React, { Component, Fragment } from "react"
import "./app.css"

import HobbyItem from "./HobbyItem"


//父组件(父组件向子组件传递内容，靠属性的形式传递。)

export default class Hobby extends Component {
 constructor(props) {
  super(props)
  this.state = {
   inputValue: "",
   list: ['王力宏', '林俊杰']

  }


 }


 inputChange = (e) => {
  // console.log("hhhh,,,,,", e.target.value)

  // this.setState({
  //  inputValue: e.target.value

  // })

  //使用ref
  this.setState({
   inputValue: this.input.value

  })

 }

 addList = (index) => {
  this.setState({

   list: [... this.state.list, this.state.inputValue]
  })
 }

 // delList1(index) {//用bind绑定

 //  console.log("index,,,,,", index)


 //  let list = this.state.list
 //  list.splice(index, 1)
 //  this.setState({
 //   list
 //  })
 // }
 delList = (index) => {//用箭头函数绑定

  let list = this.state.list
  list.splice(index, 1)
  this.setState({
   list
  })
 }



 render() {

  return (
   <Fragment >

    <div>
     <label htmlFor="jspang">添加明星:</label>
     <input value={this.state.inputValue} className="input" onChange={this.inputChange} ref={(input) => { this.input = input }} />
     <button onClick={this.addList}> 添加你喜欢的明星</button>
    </div>

    <ul >
     {this.state.list.map((item, index) =>
      // <li key={item + index}
      //  // onClick={this.delList1.bind(this, index)}
      //  onClick={this.delList1}
      // >

      //  {item}


      // </li>
      <div key={item + index}>      <HobbyItem context={item} index={index} delList={this.delList}
      />
      </div>



     )}
    </ul>

   </Fragment>
  )

 }

}
