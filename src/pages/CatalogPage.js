import React from 'react';
import Catalog from '../components/Catalog/Catalog';

class CatalogPage extends React.PureComponent {
    render() {
        return (
            <Catalog categories={JSON.parse(localStorage.catalogSections)} goods={JSON.parse(localStorage.goodsList)} />
        )
    }
}

export default CatalogPage;