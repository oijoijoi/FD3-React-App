import React from 'react';
//import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import GoodsListItem from '../GoodsListItem/GoodsListItem';
import './Catalog.css';

class Catalog extends React.Component {

    static propTypes = {
        categories: PropTypes.array,
        goods: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                desc: PropTypes.string,
                image: PropTypes.string,
                price: PropTypes.string.isRequired,
                category: PropTypes.string,
            }),
        ),
    };

    state = {
        categories: this.props.categories,
        goods: this.props.goods,
    };

    render() {
        let categories = this.state.categories.map( item => {
            return <img src={require(`../../img/${item}.png`)} alt="" key={item} className="categories__image"/>
            }
        );
        let goodsList = this.state.goods.map ( item => {
            return <GoodsListItem key={item.id} info={item} />
        });
        console.log(goodsList);

        return (
            <div>
                <div className="catalog__categories">
                    {categories}
                </div>
                <div className="catalog__goods-list">
                    {goodsList}
                </div>
            </div>
        )
    }
}

export default Catalog;