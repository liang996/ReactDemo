import React, { Component } from 'react'
import PropTypes from 'prop-types' //参数校检

//子组件

export default class HobbyItem extends Component {
 constructor(props) {
  super(props);
  this.state = {}
 }
 ItemChange = () => {
  console.log("111,,,", this.props.index)

  this.props.delList(this.props.index)
 }

 //用shouldComponentUpdate函数解决Hobby组件性能问题
 shouldComponentUpdate(nextProps, nextState) {//
  if (nextProps.context !== this.props.context) {
   return true
  } else {
   return false
  }

 }

 render() {
  return (
   <div onClick={this.ItemChange}>
    {this.props.whoName}喜欢的明星是： {this.props.context}
   </div>
  )
 }
}

HobbyItem.defaultProps = {
 whoName: "小王"
}

HobbyItem.propTypes = {
 content: PropTypes.string,
 delList: PropTypes.func,
 index: PropTypes.number,
 whoName: PropTypes.string.isRequired,//必传值的校验(isRequired)
}


