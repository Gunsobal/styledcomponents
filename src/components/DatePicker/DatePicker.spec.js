import React from 'react';
import { shallow } from 'enzyme'
import sinon from 'sinon'
import DatePicker from './DatePicker';

describe('Datepicker component test', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    it('should render with default prop', () => {
        shallow(<DatePicker onDatePick={() => {}} />);

        expect(stub.called).toBe(false)
    });

    it('should not render when missing function', () => {
        const component = shallow(<DatePicker />);

        expect(stub.calledOnce).toBe(true);
    });

    it('should call onDatePick when new date is selected', () => {
        const onDatePick = sinon.spy();
        const component = shallow(<DatePicker onDatePick={onDatePick}/>)

        const dateBefore = component.instance().state.date;
        component.find('button').last().simulate('click');

        expect(component.instance().state.date).not.toBe(dateBefore);
    });

    afterEach(() => {
        console.error.restore();
    })
});