import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../../actions'
import { ReactComponent as CrossIcon } from '../../images/icon-cross.svg';
import './style.css'

const selectTodoById = (state, todoId) => {
  return state.todoReducer.find((todo) => todo.id === todoId)
}

const TodoItem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id))
  const { text, completed } = todo

  const dispatch = useDispatch()

  const handleCompletedChanged = () => {
    dispatch(completeTodo(todo.id))
  }

  const onDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <li>
      <div className="todo-item">
        <div className="todo-label-container">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div>{text}</div>
        </div>
        <div>
          <button className="delete-button" onClick={onDelete}>
            <CrossIcon />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
