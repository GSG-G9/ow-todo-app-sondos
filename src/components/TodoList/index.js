import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TodoItem from '../TodoItem';
import './style.css';
import {selectVisibleTodoIds} from '../../selectors';

const TodoList = () => {
  const todoIds = useSelector(selectVisibleTodoIds);

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList;
