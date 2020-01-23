import React from 'react';
import { shallow } from 'enzyme';

import Register from './Register';

describe('Register', () => {
    
    const props = {
        user: {
            name: 'test name',
            surname: 'test surname',
        },
        setUser: jest.fn(),
        logout: jest.fn(),
    };
    
    const wrapper = shallow(<Register {...props} />);


    it('should render a Register component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('doing logout', () => {

        console.log('props.logout', props.logout);

        wrapper
            .find('.logoutButton')
            .childAt(0)
            .simulate('click');

        it('should logout user', () => {
            expect(props.logout).toHaveBeenCalled();
        });
    });

    describe('register: saving profile', () => {

    });
});
