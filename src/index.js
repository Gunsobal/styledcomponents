import React from 'react';
import ReactDOM from 'react-dom';

import Modal from './components/Modal/Modal';

class App extends React.Component {
    render() {
        return (
            <div>
                <Modal onClose={() => {}} isOpen={true}>
                    <Modal.Title />
                    <Modal.Body />
                    <Modal.Footer />
                </Modal>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));