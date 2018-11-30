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

    addToCart = (EO) => {
        let cart = sessionStorage.shopCart ? JSON.parse(sessionStorage.shopCart).sort() : [];
        cart.push(this.props.info.id);
        sessionStorage.shopCart = JSON.stringify(cart);
        this.addedFunc(EO);
    };

    addedFunc = (EO) => {
        let element = EO.target;
        element.classList.add('OK');
        element.value = 'Добавлено';
        setTimeout(() => {element.classList.remove('OK');element.value='В корзину';}, 450)
    };

    render() {
        return (
            <div className="single-item__wrapper">
                <h3 className="single-item__title">{this.props.info.name}</h3>
                <div className="single-item__image">
                    <img src={this.props.info.image} alt="" width="100%"/>
                </div>
                <div className="single-item__info">                    
                    <div className="single-item__description">{this.props.info.desc}</div>
                    <div className="single-item__price">{this.props.info.price} р <input type='button' value='В корзину' onClick={this.addToCart} className="single-add__button"/></div>
                </div>
            </div>
        )
    }
}

export default SingleItem;