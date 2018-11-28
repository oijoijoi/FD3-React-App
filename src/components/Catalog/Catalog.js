import React from 'react';
//import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Catalog.css';

class Catalog extends React.Component {

    static propTypes = {
        categories: PropTypes.array,
    };

    render() {
        let categories = this.props.categories.map( item => {
            return <img src={require(`../../img/${item}.png`)} alt="" key={item} className="categories__image"/>
            }
        );

        return (
            <div className="catalog__categories">
                {categories}
            </div>
        )
    }
}

export default Catalog;