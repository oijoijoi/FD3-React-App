import React from 'react';
import { NavLink } from 'react-router-dom';


class CartMinimal extends React.PureComponent {
    render() {
        return (
            <div className="header__cart">
                <NavLink to='/cart/'>Коробочка</NavLink>
            </div>
        )
    }
}

export default CartMinimal;