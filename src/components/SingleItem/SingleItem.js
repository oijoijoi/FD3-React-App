import React from 'react';
import PropTypes from 'prop-types';

import './SingleItem.css';

class SingleItem extends React.PureComponent {
    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            desc: PropTypes.string,
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
        return (
            <div className="single-item__wrapper">
                <div className="single-item__image">
                    <img src={this.props.info.image} alt="" width="100%"/>
                </div>
                <div className="single-item__info">
                    <h3 className="single-item__title">{this.props.info.name}</h3>
                    <div className="single-item__description">{this.props.info.desc}</div>
                    <div className="single-item__price">{this.props.info.price} р <input type='button' value='В корзину' onClick={this.addToCart} /></div>
                </div>
            </div>
        )
    }
}

export default SingleItem;