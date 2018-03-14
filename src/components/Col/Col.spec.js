import React from 'react';
import Col from './Col';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Col tests', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });

    it('should render Col component', () => {
        shallow(<Col>hello</Col>);

        expect(stub.notCalled).toBe(true);
    });

});