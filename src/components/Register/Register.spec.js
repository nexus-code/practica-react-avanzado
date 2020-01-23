import React from 'react';
import { shallow } from 'enzyme';

import Register from './Register';
// import { setUser } from '../../store/user/actions';

describe('Register', () => {
    
    const props = {
        user: {
            user: {
            name: 'test name',
            surname: 'test surname',
            },
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

    describe('should register user', () => {
        
        wrapper.find('.submitButton').simulate('click');
       
        console.log('wrapper', wrapper.find('.submitButton'))

        const preventDefault = jest.fn();

        it('should prevent default Form submission', () => {
            
            expect(preventDefault).toHaveBeenCalled();
        });


        it('should save user data', () => {


            expect(props.setUser).toHaveBeenCalledWith(

                expect.objectContaining(props.user)
            );
        });

    });
});
