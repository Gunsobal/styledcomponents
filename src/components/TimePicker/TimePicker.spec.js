import React from 'react';
import TimePicker from './TimePicker';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('TimePicker tests', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });

    it('should render TimePicker component', () => {
        shallow(<TimePicker onTimePick={() => {}} format={24} />);

        expect(stub.notCalled).toBe(true);
    });

    it('should display a input', () => {
        const component = shallow(<TimePicker onTimePick={() => {}} format={24} />)

        expect(component.find('input').length).toBe(1);
    });

});