require('file-loader?name=[name].[ext]!./index.html')

import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './App.css'
const appElement = document.getElementById('app');
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <div>
        <App />
    </div> 
)