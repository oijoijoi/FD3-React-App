import React from 'react';
import { NavLink } from 'react-router-dom';

import './CartMinimal.css';

class CartMinimal extends React.PureComponent {
    render() {
        let cartCounter = 
            <span className="cart-min__counter">
                1222
            </span>;

        return (
            <div className="cart-min__wrapper">
                <NavLink to='/cart/' className="cart-min__link">Коробочка {cartCounter}</NavLink>
            </div>
        )
    }
}

export default CartMinimal;