import React from 'react';
import CartoonNetworkSpinner from './CartoonNetworkSpinner';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('cartoon network spinner component tests', () => {
    let stub;
    
    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });;

    afterEach(() => {
        console.error.restore();
    });

    it('should render', () => {
        shallow(<CartoonNetworkSpinner />);

        expect(stub.notCalled).toBe(true);
    });
});