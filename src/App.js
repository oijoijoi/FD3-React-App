import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import Routes from './pages/Routes';

import './App.css';

class App extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div className="main__wrapper">
                    <Header />
                    <Routes />
                    <footer className="footer__wrapper">Тут будет футтер</footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
