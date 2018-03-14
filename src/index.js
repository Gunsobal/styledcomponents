import React from 'react';
import ReactDOM from 'react-dom';

import Modal from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <Modal onClose={() => {}} isOpen={true}>
                    <Modal.Title />
                    <Modal.Body />
                    <Modal.Footer />
                </Modal>
                <h2>ProgressBar.js</h2>
                <hr />
                <ProgressBar 
                    progress={20}
                    striped={true}
                    animated={true}
                    state={'warning'} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));