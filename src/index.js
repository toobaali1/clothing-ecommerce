import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import App from './App';
import './index.css';


ReactDOM.render(
    <Provider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>
,document.getElementById('root'));


