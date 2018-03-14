import React from 'react';
import ProgressBar from './ProgressBar';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('ProgressBar tests', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });

    it('should render ProgressBar component', () => {
        shallow(<ProgressBar progress={20} striped={false} animated={false} state={'success'} />);

        expect(stub.notCalled).toBe(true);
    });

    it('should have same width and progress', () => {
        const component = shallow(<ProgressBar progress={20} striped={false} animated={false} state={'success'} />);

        expect(component.find('span').first().prop('style').width).toEqual('20%');        
    })
});