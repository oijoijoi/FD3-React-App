import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import data from './data/data.json';

const cart = [];
window.localStorage.setItem('catalogSections', JSON.stringify(data.catalogSections));
window.localStorage.setItem('goodsList', JSON.stringify(data.goods));

if (!window.sessionStorage.shopCart) {
    window.sessionStorage.setItem('shopCart', JSON.stringify(cart))
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
