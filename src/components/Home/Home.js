import React from 'react';
//import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Home.css';

class Home extends React.PureComponent {
    static propTypes = {
        text: PropTypes.string,
    };

    state = {
        text: this.props.name,
    };

    render() {
        return (
            <div className="main-page__wrapper">
                Текст {this.state.text}
            </div>
        )
    }
}

export default Home;