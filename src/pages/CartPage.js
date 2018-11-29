import React from 'react';
import Cart from '../components/Cart/Cart';

class CartPage extends React.PureComponent {
    render() {
        return (
            <div>
                <Cart goods={JSON.parse(localStorage.goodsList)}/>
            </div>
        )
    }
}

export default CartPage;