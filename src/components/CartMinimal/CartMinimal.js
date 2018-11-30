import React from 'react';
import { NavLink } from 'react-router-dom';

import './CartMinimal.css';

class CartMinimal extends React.Component {

    render() {
        // let cartQuantity;
        // if (sessionStorage.shopCart) {
        //     cartQuantity = JSON.parse(sessionStorage.shopCart)
        // } else {
        //     cartQuantity = '';
        // }
        // let cartCounter =
        //     <span className="cart-min__counter">
        //         {cartQuantity.length}
        //     </span>;

        return (
            <div className="cart-min__wrapper">
                <NavLink to='/cart/' className="cart-min__link">КОРЗИНА {this.props.cartCounter}</NavLink>
            </div>
        )
    }
}

export default CartMinimal;