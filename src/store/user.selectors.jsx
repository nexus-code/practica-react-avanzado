import React from 'react';
import { Redirect } from 'react-router-dom';
import { getUserLS, isEmpty } from '../utils/localStorage'

export function getUserFromLocalStorage() {

    console.log('getUserFromLocalStorage');

    const user = getUserLS();
    if (isEmpty(user)){
        console.log('user.selector Redirect');

        return <Redirect to="../components/Register/Register" />
    }
    
}