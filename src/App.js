import React from 'react'
// import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Routes from './pages/Routes';

import './App.css';

class App extends React.PureComponent {
    state = {
        cartCounter: sessionStorage.shopCart ? JSON.parse(sessionStorage.shopCart).length : 0,
    };

    render() {
        return (
            <BrowserRouter>
                <div className="main__wrapper">
                    <Header cartCounter={this.state.cartCounter} />
                    <Routes />
                    <footer className="footer__wrapper">Тут будет футтер</footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
