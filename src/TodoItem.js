import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.handelColic = this.handelColic.bind(this)
  }
  render () {
    const { item, shit } = this.props
    return (
      <li onClick={this.handelColic}>
       { shit } { item }
      </li>
    )
  }

  handelColic () {
    const { delItem, index } = this.props
    delItem(index)
  }
}

TodoItem.propTypes = {
  shits: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number,
  delItem: PropTypes.func
}

TodoItem.defaultProps = {
  shit: 'shit'
}

export default TodoItem