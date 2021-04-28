import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import DarkThemeProvider from './DarkThemeProvider';
import {Container} from './theme';

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
      <DarkThemeProvider>
        <Container>
          <App />
        </Container>
      </DarkThemeProvider>
    </Provider>,
  document.getElementById('root')
);
