import React from 'react';
import SingleItem from '../components/SingleItem/SingleItem';

import data from '../data/data.json';

class SingleItemPage extends React.PureComponent {
    render() {
        let item = data.goods.filter( item => {
            return item.id === this.props.match.params.itemid;
        });
        item = item[0];
        console.log(item);
        return (
            <div>
                <SingleItem info={item}/>
            </div>
        )
    }
}

export default SingleItemPage;