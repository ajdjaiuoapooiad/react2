import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const Greeting = () => {
  return (
    <div>
      <div>
        <h1>Hello people</h1>
        <ul>
          <li>
            <a href='#'>hello world</a>
            </li>
        </ul>
      </div>
      <h2>hello world</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

