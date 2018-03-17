import React from 'react';
import NameCard from './NameCard';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('NameCard component tests', () => {
    const props = {
        name: 'Arnar Leifsson',
        email: 'mail@example.com',
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

    it('should render a name', () => {
        const component = shallow(<NameCard {...props} />);

        expect(component.html()).toContain(props.name);
    });

    it('should render an email', () => {
        const component = shallow(<NameCard {...props} />);

        expect(component.html()).toContain(props.email);
    });

    it('should render the telephone', () => {
        const component = shallow(<NameCard {...props} />);

        expect(component.html()).toContain(props.telephone);
    });

    it('should set background image property of a figure to imageUrl', () => {
        const component = shallow(<NameCard {...props} />);

        expect(component.find('figure').first().props().style.backgroundImage).toContain(props.imageUrl);
    });
});