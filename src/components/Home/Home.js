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
        let mainLogo = require(`../../img/main-logo.png`);
        return (
            <div className="main-page__wrapper">
                <img src={mainLogo} alt="" className="main-page__logo"/>
                Текст {this.state.text}
            </div>
        )
    }
}

export default Home;