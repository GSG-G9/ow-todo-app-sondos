import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TodoItem from '../TodoItem';
import './style.css'

const selectTodoIds = (state) => state.todoReducer.map((todo) => todo.id)

const TodoList = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual)

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
