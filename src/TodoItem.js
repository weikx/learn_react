import React, { Component } from 'react'

class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.handelColic = this.handelColic.bind(this)
  }
  render () {
    const { item } = this.props
    return (
      <div onClick={this.handelColic}>
        { item }
      </div>
    )
  }

  handelColic () {
    const { delItem, index } = this.props
    delItem(index)
  }
}

export default TodoItem