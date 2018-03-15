import React from 'react';
import ReactDOM from 'react-dom';

import tnj from '../resources/tomandjerry.png';
import td from '../resources/tasmaniandevil.jpg';
import bb from '../resources/bugsbunny.jpg';
import Carousel from './components/Carousel/Carousel';

class App extends React.Component {
    render() {
        return (
            <div>
                <Carousel 
                    images={[tnj, td, bb]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));