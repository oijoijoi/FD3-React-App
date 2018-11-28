import React from 'react';
import { NavLink } from 'react-router-dom';
//import PropTypes from 'prop-types';
import CartMinimal from '../CartMinimal/CartMinimal';

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header__wrapper">
                <div>
                    <img src="http://clubturbo.ru/images/template/logo1.png" alt=""/>
                    <NavLink to='/' exact className="asdfasdf" activeClassName='asdf'>Главная</NavLink>
                    <NavLink to='/catalog/' className="asdfasdf" exact activeClassName='asdf'>Каталог</NavLink>
                </div>
                <CartMinimal />
            </header>
        )
    }
}

export default Header;