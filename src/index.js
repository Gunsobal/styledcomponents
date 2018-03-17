import React from 'react';
import ReactDOM from 'react-dom';

import ProgressBar from './components/ProgressBar/ProgressBar';
import Modal from './components/Modal/Modal';
import TimePicker from './components/TimePicker/TimePicker';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    }
    render() {
        return (
            <div>
                <TimePicker onTimePick={() => {}}/>
                <ProgressBar 
                    progress={50}
                    striped={true}
                    animated={true}
                />
                <Modal isOpen={this.state.open} onClose={() => this.setState({open: false})}>
                    <Modal.Title>Title</Modal.Title>
                    <Modal.Body>
                        Body content
                    </Modal.Body>
                    <Modal.Footer>Footie text</Modal.Footer>
                </Modal>   
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));