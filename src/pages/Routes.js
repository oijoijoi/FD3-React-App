import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './HomePage';
import CatalogPage from './CatalogPage';
import SingleItemPage from './SingleItemPage';
import CartPage from './CartPage';

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route path='/' exact component={HomePage} />
                <Route path='/catalog/' component={CatalogPage} />
                <Route path='/catalog/item/:itemid' component={SingleItemPage} />
                <Route path='/cart/' component={CartPage} />
            </div>
        );
    }
}

export default Routes;