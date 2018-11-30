import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './GoodsListItem.css';

class GoodsListItem extends React.Component {

    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string,
        }),
    };

    addToCart = (EO) => {
        let cart = sessionStorage.shopCart ? JSON.parse(sessionStorage.shopCart).sort() : [];
        cart.push(this.props.info.id);
        sessionStorage.shopCart = JSON.stringify(cart);
        this.addedFunc(EO)
    };

    addedFunc = (EO) => {
        let element = EO.target;
        element.classList.add('OK');
        element.value = 'Добавлено';
        setTimeout(() => {element.classList.remove('OK');element.value='В корзину';}, 1000)
    };

    render() {
        const url = `/catalog/item/${this.props.info.id}`;
        return (
            <div className="goods-list-item__wrapper">
                <NavLink to={url}>
                    <img src={this.props.info.image} alt="" className="goods-list-item__image" />
                    <div className="goods-list-item__name">{this.props.info.name}</div>
                    <div className="goods-list-item__price">{this.props.info.price} р </div>
                </NavLink>
                <input type='button' value='В корзину' onClick={this.addToCart} className="add__button"/>
            </div>
        )
    }
}

export default GoodsListItem;