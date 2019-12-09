import React from 'react';
import { Redirect } from 'react-router-dom';
import { getUserLS, isEmpty } from '../utils/localStorage'
import { PATH_REGISTER } from '../constants'

export function getUser() {
    // get user from local storage if exits, otherwise redirect to register

    console.log('getUser');

    const user = getUserLS();
    if (isEmpty(user)){
        console.log('user.selector Redirect');

        return <Redirect to= {PATH_REGISTER} />
    }
    
}

export function setUser() {

}
