import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
import tnj from '../resources/tomandjerry.png';
import td from '../resources/tasmaniandevil.jpg';
import bb from '../resources/bugsbunny.jpg';
import Carousel from './components/Carousel/Carousel';
import Modal from './components/Modal/Modal';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Row from './components/Row/Row'
import Col from './components/Col/Col';
import Tabs from './components/Tabs/Tabs';
import Tab from  './components/Tab/Tab';
import TimePicker from './components/TimePicker/TimePicker';
=======
import { CartoonNetworkSpinner } from './lib';
>>>>>>> 5128335dbddc3cc1e8a44b352be465cce456ce8e


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1
        }
    }
    render() {
        return (
            <div>
<<<<<<< HEAD
                <Carousel 
                    images={[tnj, td, bb]}
                />
                {/*
                <Modal onClose={() => {}} isOpen={true}>
                    <Modal.Title />
                    <Modal.Body />
                    <Modal.Footer />
                </Modal>
                */}
                <h2>TimePicker.js</h2>
                <hr />
                <TimePicker onTimePick={() => {}} format={24} />
                <h2>ProgressBar.js</h2>
                <hr />
                <ProgressBar 
                    progress={20}
                    striped={true}
                    animated={true}
                    state={'warning'} />

                <h2>Tabs and tab</h2>
                <hr />
                <Tabs
                    layout='horizontal'
                    theme='dark'
                    onSelect={tab => this.setState({ tab })}
                    currentSelectedTab={this.state.tab}>
                    <Tab title={"hæ"} selectionKey={1}>
                        Content 1
                    </Tab>
                    <Tab title={"hæ2"} selectionKey={2}>
                        Content 2
                    </Tab>
                    <Tab title={"hæ3"} selectionKey={3}>
                        Content 3
                    </Tab>
                </Tabs>
                <h2>Row</h2>
                <hr />
                <Row>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col>hello</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={2}>hello2</Col>
                    <Col size={2}>hello2</Col>
                    <Col size={2}>hello2</Col>
                    <Col size={2}>hello2</Col>
                    <Col size={2}>hello2</Col>
                    <Col size={2}>hello2</Col>
                    <Col size={3}>hello3</Col>
                    <Col size={3}>hello3</Col>
                    <Col size={3}>hello3</Col>
                    <Col size={3}>hello3</Col>
                    <Col size={4}>hello4</Col>
                    <Col size={4}>hello4</Col>
                    <Col size={4}>hello4</Col>
                    <Col size={5}>hello5</Col>
                    <Col size={2}>hello2</Col>
                    <Col size={5}>hello5</Col>
                    <Col size={6}>hello6</Col>
                    <Col size={6}>hello6</Col>
                    <Col size={7}>hello7</Col>                    
                    <Col size={5}>hello5</Col>
                    <Col size={8}>hello8</Col>
                    <Col size={4}>hello4</Col>
                    <Col size={9}>hello9</Col>
                    <Col size={3}>hello3</Col>
                    <Col size={10}>hello10</Col>
                    <Col size={2}>hello2</Col>
                    <Col size={11}>hello11</Col>
                    <Col size={1}>hello1</Col>
                    <Col size={12}>hello12</Col>
                    <Col size={2}>hello2</Col>
                    <Col size={2}>hello2</Col>
                    
                    
                </Row>
=======
                <CartoonNetworkSpinner />
>>>>>>> 5128335dbddc3cc1e8a44b352be465cce456ce8e
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));