import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'
import App from './App';
import './index.css';
import './responsive.css';
import FilterData from "./FilterData";
import ProductData from "./ProductData";

ReactDOM.render(

    <App component = {FilterData} component2 = {ProductData}/>,
    document.getElementById('root'));
registerServiceWorker()
