import React from "react";
import { ReactDOM } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from './store';

ReactDOM.render(
  // Provider를 사용해서 index.js와 store.js를 연결한다
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));