import React from 'react';
import Home from '../components/Home/Home';

import appData from '../data/data.json';

class HomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <Home text={appData.text}/>
            </div>
        )
    }
}

export default HomePage;