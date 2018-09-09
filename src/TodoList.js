import React, {
  Component,
  Fragment
} from 'react'
import TodoItem from './TodoItem'
import './style.css'
class TodoList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      list: []
    }

    this.handelItemChange = this.handelItemChange.bind(this)
    this.handleBtnCLick = this.handleBtnCLick.bind(this)
    this.handelDelete = this.handelDelete.bind(this)
  }
  render () {
    return (
      <Fragment>
        <label htmlFor="shit">hello</label>
        <input
        id="shit"
        className="input"
        value={this.state.value}
        onChange={this.handelItemChange}
        />
        <button onClick={this.handleBtnCLick}>提交</button>
        <ul>
          {this.listItem()}
        </ul>
      </Fragment>
    )
  }

  handelItemChange(e) {
    const value = e.target.value
    this.setState(() => ({
      value
    }))
  }

  handleBtnCLick () {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.value],
      value: ''
    }))
  }

  handelDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }

  listItem () {
    return this.state.list.map((item, index) => {
      return <TodoItem 
              key={index}
              item={item}
              index={index}
              delItem={this.handelDelete}
             >
             </TodoItem>
    })
  }
}

export default TodoList