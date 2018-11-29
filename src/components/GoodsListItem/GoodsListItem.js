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

    addToCart = () => {
        let cart = sessionStorage.shopCart ? JSON.parse(sessionStorage.shopCart).sort() : [];
        console.log(cart);
        cart.push(this.props.info.id);
        sessionStorage.shopCart = JSON.stringify(cart);
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
                <input type='button' value='В корзину' onClick={this.addToCart}></input>
            </div>
        )
    }
}

export default GoodsListItem;