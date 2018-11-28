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

    render() {
        const url = `/catalog/item/${this.props.info.id}`;
        return (
            <NavLink to={url} className="goods-list-item__wrapper">
                <img src={this.props.info.image} alt="" className="goods-list-item__image" />
                <div className="goods-list-item__name">{this.props.info.name}</div>
                <div className="goods-list-item__price">{this.props.info.price} р <input type='button' value='В корзину'></input></div>
            </NavLink>
        )
    }
}

export default GoodsListItem;