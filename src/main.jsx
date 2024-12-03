// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// 1. Provider'ı içe aktarıyoruz
import { Provider } from 'react-redux'
// 2. Daha önce oluşturulan store'u içe aktarıyoruz
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	  <Provider store={store}>
	    <App />
	  </Provider>
  </React.StrictMode>
);