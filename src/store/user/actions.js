import {
    SET_USER,
    LOGOUT,
} from './types';

// export const setUser = user => ({
//     type: SET_USER,
//     user,
// });

import { toast } from 'react-toastify';


// uses toast to ui add notifications   
const notifySaved = () => toast.success('Profile saved!');
const notifyError = () => toast.error('Error on save!');
// const notifyWarning = (warning) => toast.warning(warning);


export const saveUser = user => ({
    type: SET_USER,
    user,
});

export const userLogout = () => ({
    type: LOGOUT,
});

// export const setUser = (...args) => (dispatch, _getState, { history }) => {
export const setUser = (...args) => (dispatch, _getState) => {

    try {

        dispatch(saveUser(...args));
        notifySaved();
        // history.push("/");

    } catch (error) {

        notifyError();
        console.log(error);
    }    
};


// export const logout = (...args) => (dispatch, _getState, { history }) => {
export const logout = (...args) => (dispatch, _getState, { history }) => {
    dispatch(userLogout(...args));
    // history.push('/register');
};