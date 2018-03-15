import React from 'react';
import Tabs from './Tabs';
import Tab from '../Tab/Tab';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Tabs tests', () => {
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });

    it('should render Tabs component', () => {
        const component = shallow(
        <Tabs theme={'light'} layout={'vertical'} onSelect={() => {}} currentSelectedTab={1}>
            <Tab selectionKey={1} title="hi">hi</Tab>
        </Tabs>);

        expect(stub.notCalled).toBe(true);
    });

});