import React from 'react';
import { NavLink } from 'react-router-dom';
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

    // filterList = (EO) => {
    //     console.log(this.props.match.params.item);
    //     EO.target.classList.toggle('categories__selected');
    //     let newGoodsList = this.props.goods.filter(item => {
    //         console.log(item.category);
    //         return item.category === EO.target.id;
    //     });
    //     console.log(newGoodsList);
    //     this.setState({goods: newGoodsList});
    // };

    render() {
        let categories = this.state.categories.map( item => {
            let imageUrl = require(`../../img/${item}.png`);
            let url = `/catalog/:${item}`;
            return <NavLink to={url} style={{ backgroundImage: `url(${imageUrl})` }} key={item} className="categories__image" id={item} />
            }
        );
        let goodsList = this.state.goods.map ( item => {
            return <GoodsListItem key={item.id} info={item} />
        });

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