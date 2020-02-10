import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactRouter from './route/router';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(<Router> <ReactRouter /> </Router>,document.getElementById('root'));
serviceWorker.unregister();
