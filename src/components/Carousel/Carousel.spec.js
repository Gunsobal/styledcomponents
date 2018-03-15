import React from 'react';
import Carousel from './Carousel';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Carousel component tests', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });
    
    it('should render', () => {
        shallow(<Carousel />);

        expect(stub.notCalled).toBe(true);
    });

    it('should call slideLeft function when first button is pressed', () => {
        const component = shallow(<Carousel />);
        let mockFn = jest.fn();
        component.instance().slideLeft = mockFn;

        component.find('button').first().simulate('click');
        
        expect(mockFn.mock.calls.length).toBe(1);
    });
    
    it('should call slideRight function when last button is clicked', () => {
        const component = shallow(<Carousel />);
        let mockFn = jest.fn();
        component.instance().slideRight = mockFn;
        
        component.find('button').last().simulate('click');
        
        expect(mockFn.mock.calls.length).toBe(1);
    });

    it('should decrement selected state when first button is clicked', () => {
        const component = shallow(<Carousel images={['1', '2']} />);
        component.setState({selected: 1});
        
        component.find('button').first().simulate('click');

        expect(component.state().selected).toBe(0);
    });
    
    it('should increment selected state when last button is clicked', () => {
        const component = shallow(<Carousel images={['1', '2']} />);
        component.setState({selected: 0});
        
        component.find('button').last().simulate('click');
        
        expect(component.state().selected).toBe(1);
    });
    
    it('should set selected state to last image if first button is clicked when on first image', () => {
        const component = shallow(<Carousel images={['1', '2']} />);
        component.setState({selected: 0});
        
        component.find('button').first().simulate('click');
        
        expect(component.state().selected).toBe(1);
    });
    
    it('should set selected state to first image when last button is clicked when on last image', () => {
        const component = shallow(<Carousel images={['1', '2']} />);
        component.setState({selected: 1});
        
        component.find('button').last().simulate('click');
        
        expect(component.state().selected).toBe(0);
    });

    it('should render an img tag with src of first image', () => {
        const src = 'image.png';

        const component = shallow(<Carousel images={[src, 'foo']} />);

        expect(component.find('img').first().props().src).toBe(src);
    });

    it('should render the next image in an array when last button is clicked', () => {
        const component = shallow(<Carousel images={['image1', 'image2']} />);

        expect(component.find('figure').last().props().style.display).toBe('none');
        component.find('button').last().simulate('click');
        expect(component.find('figure').last().props().style.display).toBe('flex');
    });
    
    it('should render the previous image in an array when first button is clicked', () => {
        const component = shallow(<Carousel images={['image1', 'image2']} />);
        component.setState({selected: 1});
        
        expect(component.find('figure').first().props().style.display).toBe('none');
        component.find('button').first().simulate('click');
        expect(component.find('figure').first().props().style.display).toBe('flex');
    });
});