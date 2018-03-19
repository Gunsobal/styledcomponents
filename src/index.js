import React from 'react';
import ReactDOM from 'react-dom';

import ProgressBar from './components/ProgressBar/ProgressBar';
import Modal from './components/Modal/Modal';
import TimePicker from './components/TimePicker/TimePicker';
import Carousel from './components/Carousel/Carousel';
import NameCard from './components/NameCard/NameCard';
import DatePicker from './components/DatePicker/DatePicker';
import CartoonNetworkSpinner from './components/CartoonNetworkSpinner/CartoonNetworkSpinner';
import Row from './components/Row/Row';
import Col from './components/Col/Col';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/Tab/Tab';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            horiz: 0,
            vert: 0
        }
    }
    render() {
        return (
            <div>
                <h3>Modal</h3>
                <button onClick={() => this.setState({open: true})}>Show Modal</button>
                <Modal isOpen={this.state.open} onClose={() => this.setState({open: false})}>
                    <Modal.Title>Title</Modal.Title>
                    <Modal.Body>
                        Body content
                    </Modal.Body>
                    <Modal.Footer>Footie text</Modal.Footer>
                </Modal>
                <hr />
                <h3>ProgressBar</h3>
                <ProgressBar progress={30} state={'danger'} striped={true} animated={true} />
                <ProgressBar progress={30} state={'info'} striped={true} animated={true} />
                <ProgressBar progress={30} state={'warning'} striped={true} animated={true} />
                <ProgressBar progress={30} state={'success'} striped={true} animated={true} />
                <ProgressBar progress={30} striped={true} animated={true} />
                <hr />
                <h3>NameCard</h3>
                <NameCard 
                    name={"Gunnar Örn Baldursson"}
                    email={"gunnarorn.91@gmail.com"}
                    telephone={"+354 846 6836"}
                    imageUrl={"https://www.ocf.berkeley.edu/~dblab/blog/wp-content/uploads/2012/01/icon-profile.png"}
                />
                <hr />
                <h3>Carousel</h3>
                <div style={{display: 'flex'}} >
                    <Carousel images={[
                            'http://i0.kym-cdn.com/photos/images/newsfeed/001/149/102/6f3.png',
                            'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png',
                            'https://vignette.wikia.nocookie.net/looneytunes/images/0/05/Daffy-duck_00402319.png'
                        ]}
                        size={'small'}
                    />
                    <Carousel 
                        images={[
                            'http://i0.kym-cdn.com/photos/images/newsfeed/001/149/102/6f3.png',
                            'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png',
                            'https://vignette.wikia.nocookie.net/looneytunes/images/0/05/Daffy-duck_00402319.png'
                        ]}
                    />
                    <Carousel images={[
                            'http://i0.kym-cdn.com/photos/images/newsfeed/001/149/102/6f3.png',
                            'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png',
                            'https://vignette.wikia.nocookie.net/looneytunes/images/0/05/Daffy-duck_00402319.png'
                        ]}
                        size={'large'}
                    />
                </div>
                <hr />
                <h3>Rows &amp; Cols</h3>
                <Row>
                    <Col size={4}>
                        <div style={{backgroundColor: 'red'}}>Size 4</div>
                    </Col>
                    <Col size={8}>
                        <div style={{backgroundColor: 'red'}}>Size 8</div>
                    </Col>
                    <Col>
                        <div style={{backgroundColor: 'red'}}>Size 1</div>
                    </Col>
                </Row>
                <Row>
                    <Col size={4}>
                        <div style={{backgroundColor: 'blue'}}>Size 4</div>
                    </Col>
                    <Col size={4}>
                        <div style={{backgroundColor: 'blue'}}>Size 4</div>
                    </Col>
                    <Col size={4}>
                        <div style={{backgroundColor: 'blue'}}>Size 4</div>
                    </Col>
                </Row>
                <Row>
                    <Col size={6}>
                        <div style={{backgroundColor: 'yellow'}}>Size 6</div>
                    </Col>
                    <Col size={5}>
                        <div style={{backgroundColor: 'yellow'}}>Size 5</div>
                    </Col>
                </Row>
                <Row>
                    <Col size={2}>
                        <div style={{backgroundColor: 'green'}}>Size 2</div>
                    </Col>
                    <Col size={2}>
                        <div style={{backgroundColor: 'green'}}>Size 2</div>
                    </Col>
                    <Col size={2}>
                        <div style={{backgroundColor: 'green'}}>Size 2</div>
                    </Col>
                </Row>
                <hr />
                <h3>Tabs &amp; Tab</h3>
                <Tabs
                    onSelect={horiz => this.setState({ horiz })}
                    currentSelectedTab={this.state.horiz}
                >
                    <Tab title="Tab 1" selectionKey={0}>
                        Tab 1 Content
                    </Tab>
                </Tabs>
                <hr />
                <h3>TimePicker</h3>
                <TimePicker onTimePick={() => {}} />
                <hr />
                <h3>DatePicker</h3>
                <DatePicker onDatePick={() => {}} />
                <hr />
                <h3>CartoonNetworkSpinner</h3>
                <CartoonNetworkSpinner />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));