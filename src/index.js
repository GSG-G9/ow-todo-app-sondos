import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import {addTodo, deleteTodo, setVisibilityFilter, completeTodo, clearCompletedTodo, toggleDarkTheme} from './actions'

const store = createStore(rootReducer)

// let preloadedState;
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }

// const store = createStore(rootReducer, preloadedState)
console.log(store.getState());

store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)

// store.dispatch(addTodo('first task'));
// store.dispatch(setVisibilityFilter('showActive'));
// store.dispatch(completeTodo(0));
// store.dispatch(clearCompletedTodo());
// store.dispatch(toggleDarkTheme());
// store.dispatch(toggleDarkTheme());
// localStorage.setItem('todos', JSON.stringify(store.getState()));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
