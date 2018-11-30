import React from 'react';
import PropTypes from 'prop-types';
// import './Cart.css';

class CartItem extends React.PureComponent {
    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string,
        }),
        sendItemForDelete: PropTypes.func,
    };

    state = {
        deleteConfirm: false,
    };

    removeItem = () => {
        if (!this.state.deleteConfirm) {
            this.setState({deleteConfirm:true});
        } else {
            this.setState({deleteConfirm:false})
        }
    };
    confirmDelete = () => {
        this.props.sendItemForDelete(this.props.info.id);
    };

    render() {
        let delButton = <input type="button" onClick={this.removeItem} value="Удалить позицию" />;
        if (this.state.deleteConfirm) {
            delButton = <div>
                Удалить элемент:
                <input type="button" onClick={this.confirmDelete} value="Да" />
                <input type="button" onClick={this.removeItem} value="Нет" />
            </div>
        }
        return (
            <div className="cart-item__wrapper" key={this.props.info.id}>
                <img src={this.props.info.image} alt="none" className="cart-item__image"/>
                <div className="cart-item__info">
                    <div className="cart-item__title">{this.props.info.name}</div>
                    <div className="cart-item__description">{this.props.info.desc}</div>
                    <div className="cart-item__price">Цена: {this.props.info.price} р</div>
                    <div className="cart-item__quanter">Кол-во: {this.props.info.quanter}</div>
                    {delButton}
                </div>
            </div>
        )
    }
}

export default CartItem;