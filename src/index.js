import React from 'react';
import ReactDOM from 'react-dom';

import { CartoonNetworkSpinner } from './lib';


class App extends React.Component {
    render() {
        return (
            <div>
                <CartoonNetworkSpinner />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));