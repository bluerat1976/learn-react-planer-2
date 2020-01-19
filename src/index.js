import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Planner from './Planner';

var destonation = document.querySelector('#box');

ReactDOM.render (
    <div>
        <Planner/>
    </div>,
    destonation
);