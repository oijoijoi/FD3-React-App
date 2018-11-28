import React from 'react';
import Catalog from '../components/Catalog/Catalog';

import data from '../data/data.json';

class CatalogPage extends React.PureComponent {
    render() {
        return (
            <Catalog categories={data.catalogSections} />
        )
    }
}

export default CatalogPage;