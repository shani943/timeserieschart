import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

import { toggleDataFetching } from './components/chart'; // Ensure this import

ReactDOM.render(<App />, document.getElementById('root'));

document.getElementById('toggle-fetch-btn').addEventListener('click', toggleDataFetching);
