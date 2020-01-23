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

    describe('should do logout', () => {

        wrapper
            .find('.logoutButton')
            .simulate('click');

        it('should logout user', () => {
            expect(props.logout).toHaveBeenCalled();
        });
    });

    describe.only('should register user', () => {
        const preventDefault = jest.fn();
        wrapper.find('Form').simulate('submit', { preventDefault });

        it('should prevent default Form submission', () => {
            
            expect(preventDefault).toHaveBeenCalled();
        });


        it.only('should save user data', () => {

            expect(props.setUser).toHaveBeenCalledWith(
                expect.objectContaining(props.user)
                // expect.objectContaining(expect.anything())

            );
        });

    });
});
