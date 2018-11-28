import React from 'react';
import { NavLink } from 'react-router-dom';
//import PropTypes from 'prop-types';
import CartMinimal from '../CartMinimal/CartMinimal';

import './Header.css';

class Header extends React.Component {
    render() {
        let logoUrl = require(`../../img/logo.png`);
        return (
            <header className="header__wrapper">
                <div className="header__menu">
                    <img src={logoUrl} alt=""/>
                    <NavLink to='/' exact className="header-link">Главная</NavLink>
                    <NavLink to='/catalog/' className="header-link">Каталог</NavLink>
                </div>
                <CartMinimal />
            </header>
        )
    }
}

export default Header;