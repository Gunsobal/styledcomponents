import React from 'react';
import Modal from './Modal';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Modal tests', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });

    it('should render modal component', () => {
        shallow(<Modal onClose={() => {}} />);

        expect(stub.notCalled).toBe(true);
    });

    it('should render title component', () => {
        shallow(<Modal.Title />);

        expect(stub.notCalled).toBe(true);
    });

    it('should render body component', () => {
        shallow(<Modal.Body />);

        expect(stub.notCalled).toBe(true);
    });

    it('should render footer component', () => {
        shallow(<Modal.Footer />);

        expect(stub.notCalled).toBe(true);
    });

    it('should have a display of none if isOpen property is set to false', () => {
        const component = shallow(<Modal isOpen={false} onClose={() => {}} />);
        
        expect(component.find('div').first().prop('style').display).toEqual('none');
    });

    it('should have a display of flex if isOpen property is set to true', () => {
        const component = shallow(<Modal isOpen={true} onClose={() => {}} />);

        expect(component.find('div').first().prop('style').display).toEqual('flex');
    });

    it('should trigger onClose handler when container div is clicked', () => {
        let clicked = false;
        const component = shallow(<Modal isOpen={true} onClose={() => clicked = true} />);
        component.find('div').first().simulate('click');
        expect(clicked).toBe(true);
    });
    
    it('should trigger onClose handler when span is clicked', () => {
        let clicked = false;
        const component = shallow(<Modal isOpen={true} onClose={() => clicked = true} />);
        component.find('span').first().simulate('click');
        expect(clicked).toBe(true);
    });
    
    it('should not trigger onClose handler when modal element of container div is clicked', () => {
        let clicked = false;
        const mockStopPropagation = jest.fn();
        const component = shallow(<Modal isOpen={true} onClose={() => clicked = true} />);
        component.find('div > div').first().simulate('click', {stopPropagation: mockStopPropagation});
        expect(clicked).toBe(false);
        expect(mockStopPropagation.mock.calls.length).toBe(1);
    });
    
    it('should render children in modal component', () => {
        const component = shallow(<Modal onClose={() => {}}><p id="test">item</p></Modal>);

        expect(component.find('#test').text()).toBe('item');
    });

    it('should render children in title component', () => {
        const component = shallow(<Modal.Title><span id="test">title</span></Modal.Title>);

        expect(component.find('#test').text()).toBe('title');
    });
    
    it('should render children in body component', () => {
        const component = shallow(<Modal.Body><span id="test">body</span></Modal.Body>);

        expect(component.find('#test').text()).toBe('body');
    });

    it('should render children in footer component', () => {
        const component = shallow(<Modal.Footer><span id="test">footer</span></Modal.Footer>);

        expect(component.find('#test').text()).toBe('footer');
    });
});