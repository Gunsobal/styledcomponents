import React from 'react';
import ReactDOM from 'react-dom';

import CN from './components/CartoonNetworkSpinner/CartoonNetworkSpinner';

class App extends React.Component {
    render() {
        return (
            <div>
                <CN interval={1} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));