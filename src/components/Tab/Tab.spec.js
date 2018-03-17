import React from 'react';
import Tab from './Tab';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Tab tests', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });

    it('should render Tab component', () => {
        shallow(<Tab selectionKey={2} title="Tab">content</Tab>);

        expect(stub.notCalled).toBe(true);
    });

});