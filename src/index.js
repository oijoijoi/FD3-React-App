import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import data from './data/data.json';
// function loadData() {
//     var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

//     // отдельно создаём набор POST-параметров запроса
//     let sp = new URLSearchParams();
//     sp.append('f', 'LOCKGET');
//     sp.append('n', 'LOBANOV_SHOP_DATA');
//     sp.append('p', '123asd');

//     fetch(ajaxHandlerScript, { method: 'post', body: sp })
//         .then( response => response.json() )
//         .then( data => { inputData() } )
//         .catch( error => { console.error(error); } );
// }
// function inputData() {
//     var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

//     // отдельно создаём набор POST-параметров запроса
//     let sp = new URLSearchParams();
//     sp.append('f', 'UPDATE');
//     sp.append('n', 'LOBANOV_SHOP_DATA');
//     sp.append('p', '123asd');
//     sp.append('v', JSON.stringify(data.goods));

//     fetch(ajaxHandlerScript, { method: 'post', body: sp })
//         .then( response => response.json() )
//         .then( data => { console.log(data) } )
//         .catch( error => { console.error(error); } );
// }
// loadData();

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
