import React from 'react';
//import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import CartItem from '../CartItem/CartItem';
import './Cart.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cartArray: sessionStorage.shopCart ? JSON.parse(sessionStorage.shopCart).sort() : []};
    }
    static propTypes = {
        goods: PropTypes.array,
    };

    state = {
        clearConfirm: false,
    };

    clearCartAlert = () => {
        if (!this.state.clearConfirm) {
            this.setState({clearConfirm:true});
        } else {
            this.setState({clearConfirm:false})
        }
    };

    clearCart = () => {
        sessionStorage.shopCart = '';
        this.setState({cartArray: []});
    };

    removeItemFromCart = (ID) => {
        let newArray = [];
        this.state.cartArray.forEach(item => {
            if (item !== ID) {newArray.push(item)}
        });
        if (newArray[0] === undefined) { newArray = [] }
        sessionStorage.shopCart = JSON.stringify(newArray);
        this.setState({cartArray:newArray});
    };

    render() {
        let cartTitle = 'В Вашей корзине пусто!';
        if (this.state.cartArray.length > 0) {cartTitle = 'В Вашей корзина находится: '}
        let cartReadyArray = [];
        let totalSumm = 0;
        this.state.cartArray.forEach( itemID => {            
            let findedElement = this.props.goods.find( item => item.id === itemID);
            if (!cartReadyArray.find( item => item.id === itemID)) {
                findedElement.quanter = 1;
                cartReadyArray.push(findedElement);
            } else { findedElement.quanter++ }
            totalSumm+=parseInt(findedElement.price);
        });

        let cartContent = cartReadyArray.map( item => {
            return <CartItem key={item.id} info={item} sendItemForDelete={this.removeItemFromCart} />
        });

        let clearButton = <input type="button" onClick={this.clearCartAlert} value="Очистить" className="cart__button" />;
        if (this.state.clearConfirm) {
            clearButton = <div className="cart__clear">
                <span>Очистить?</span>
                <input type="button" onClick={this.clearCart} value="Да" className="cart__button" />
                <input type="button" onClick={this.clearCartAlert} value="Нет" className="cart__button" />
            </div>;
        }

        let summary = (totalSumm!==0) ? <div className="cart__info">
            <h3>Сумма:<br /> {totalSumm} р</h3>
            {clearButton}
            <input type="button" value="Оформить заказ" className="cart__button" />
        </div> : null;

        return (
            <div className="cart__wrapper">
                <div className="cart__list">
                    <h3>{cartTitle}</h3>
                    {cartContent}
                </div>
                {summary}
            </div>
        )
    }
}

export default Cart;