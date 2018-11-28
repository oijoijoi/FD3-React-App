import React from 'react';
import PropTypes from 'prop-types';

class GoodsListItem extends React.Component {

    static propTypes = {
        info: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string,
        }),
    };

    render() {
        console.log(this.props.image);
        return (
            <div>
                <img src={this.props.info.image} alt="" width="100px"/>
                {this.props.info.name} {this.props.info.price}
            </div>
        )
    }
}

export default GoodsListItem;