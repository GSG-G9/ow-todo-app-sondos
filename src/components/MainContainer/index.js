import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import {addTodo} from '../../actions';
import TodoList from '../TodoList';
import Footer from '../Footer';
import {Input, MainSectionContainer} from '../../theme'


const MainContainer = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    if (e.which === 13 && text) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    
    <div className="main-container">
      <Input
       type="text"
       className="todo-input"
       placeholder="Create a new todo ..."
       value={text}
       onChange={handleChange}
       onKeyDown={handleKeyDown}></Input>
       <MainSectionContainer>
         <div className="todos-footer-container">
            <TodoList />
            <Footer />
         </div>
       </MainSectionContainer>
    </div>
  )
}

export default MainContainer;
