import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import {addTodo} from '../../actions'
import TodoList from '../TodoList'

const MainContainer = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    const trimmedText = text.trim()
    if (e.which === 13 && trimmedText) {
      dispatch(addTodo(trimmedText))
      setText('')
    }
  }

  return (
    <div className="main-container">
      <input 
       type="text"
       className="todo-input"
       placeholder="Create a new todo ..."
       value={text}
       onChange={handleChange}
       onKeyDown={handleKeyDown}></input>
       <div>
        <TodoList />
       </div>
    </div>
  )
}

export default MainContainer;
