import React from 'react';
import NameCard from './NameCard';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('NameCard component tests', () => {
    const props = {
        name: 'Arnar Leifsson',
        email: 'arnarl@ru.is',
        telephone: '+354 777-7777',
        imageUrl: 'https://example.com/profile.jpg'
    };
    let stub;

    beforeEach(() => {
        stub = sinon.stub(console, 'error');
    });

    afterEach(() => {
        console.error.restore();
    });
    
    it('should render', () => {
        shallow(<NameCard {...props} />);

        expect(stub.notCalled).toBe(true);
    });
});