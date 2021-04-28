import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {toggleDarkTheme} from '../../actions'
import './style.css';

const Header = () => {
  const darkThemeEnabled = useSelector((state) => state.themeReducer.darkThemeEnabled);
  const dispatch = useDispatch();
  return (
    <div className="image-container">
      <p className="todo-text">TODO</p>
      <input
        className="mode-converter"
        type="checkbox"
        id="checkboxid"
        checked={darkThemeEnabled}
        onChange={() => dispatch(toggleDarkTheme())}
        
      ></input>
      <label for="checkboxid" className="mode-label"></label>
    </div>
  )
}

export default Header;
