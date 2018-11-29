import React from 'react';
//import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Cart.css';

class Cart extends React.PureComponent {
    static propTypes = {
        goods: PropTypes.array,
    };

    state = {
        cartArray: sessionStorage.shopCart ? JSON.parse(sessionStorage.shopCart).sort() : [],
    };

    clearCart = () => {
        sessionStorage.shopCart = '';
        this.setState({cartArray: []});
    }

    render() {
        let cartReaduArray = [];
        this.state.cartArray.forEach( itemID => {            
            let findedElement = this.props.goods.find( item => item.id === itemID);
            if (!cartReaduArray.find( item => item.id === itemID)) {
                findedElement.quanter = 1;
                cartReaduArray.push(findedElement);
            } else { findedElement.quanter++ }
        });
        let cartContent = cartReaduArray.map( item => {
            return <div className="cart-item__wrapper" key={item.id}>
                <img src={item.image} alt="none" className="cart-item__image" />
                <div className="cart-item__info">   
                    <div className="cart-item__title">{item.name}</div>
                    <div className="cart-item__description">{item.desc}</div>
                    <div className="cart-item__price">Цена: {item.price} р</div>
                    <div className="cart-item__quanter">Кол-во: {item.quanter}</div>
                </div>
            </div>
        })
        return (
            <div className="cart__wrapper">
                <h3>В вашей корзине находится: </h3>
                <input type="button" onClick={this.clearCart} value="Очистить" />
                {cartContent}
            </div>
            
        )
    }
}

export default Cart;