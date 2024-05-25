import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './layouts/App';
import reportWebVitals from './reportWebVitals';
import './sass/main.scss';

const DATA = [
  {id: "todo-0", name: "Пойти погулять", completed: true},
  {id: "todo-1", name: "Написать отзыв", completed: false},
  {id: "todo-2", name: "Купить молоко", completed: false}
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <App tasks={DATA} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
