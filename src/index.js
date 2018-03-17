import React from 'react';
import ReactDOM from 'react-dom';

import ProgressBar from './components/ProgressBar/ProgressBar';
import Modal from './components/Modal/Modal';
import TimePicker from './components/TimePicker/TimePicker';
import Carousel from './components/Carousel/Carousel';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.open} onClose={() => this.setState({open: false})}>
                    <Modal.Title>Title</Modal.Title>
                    <Modal.Body>
                        Body content
                    </Modal.Body>
                    <Modal.Footer>Footie text</Modal.Footer>
                </Modal>
                <Carousel 
                    images={[
                        'http://i0.kym-cdn.com/photos/images/newsfeed/001/149/102/6f3.png',
                        'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png',
                        'https://vignette.wikia.nocookie.net/looneytunes/images/0/05/Daffy-duck_00402319.png'
                    ]}
                    size={'small'}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));