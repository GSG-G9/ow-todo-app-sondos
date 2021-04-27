import React from 'react';
import './style.css';
import moon from '../../images/icon-moon.svg'

const Header = () => {
  return (
    <div className="image-container">
      <p className="todo-text">TODO</p>
      <img alt="dark mode" src={moon} className="mode-converter"/>
    </div>
  )
}

export default Header;
