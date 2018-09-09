import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  render () {
    const { item, shit } = this.props
    return (
      <li onClick={this.handelClick}>
       { shit } { item }
      </li>
    )
  }

  handelClick = () => {
    const { delItem, index } = this.props
    delItem(index)
  }
}

TodoItem.propTypes = {
  shit: PropTypes.string.isRequired,
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number,
  delItem: PropTypes.func
}

TodoItem.defaultProps = {
  shit: 'shit'
}

export default TodoItem