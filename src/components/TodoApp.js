import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'


export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentTodo: '',
      todos: []
    }
    this.handleNewTodoChange = this.handleNewTodoChange.bind(this)
  }

  handleNewTodoChange (evt) {
    this.setState({
      currentTodo: evt.target.value
    })
  }



  render () {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm currentTodo={this.state.currentTodo} handleNewTodoChange={this.handleNewTodoChange} />
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} />
          </section>
          <Footer />
        </div>
      </Router>
    )
  }
}
