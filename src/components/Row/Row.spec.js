import React from 'react';
import Row from './Row';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Row tests', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });

    it('should render Row component', () => {
        shallow(<Row>hello</Row>);

        expect(stub.notCalled).toBe(true);
    });

});