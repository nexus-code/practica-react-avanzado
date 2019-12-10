import React, { useReducer } from "react";
import { PropTypes } from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import AppNavbar        from '../AppNavbar/AppNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { setUserLS } from '../../utils/localStorage'

toast.configure({
    autoClose: 8000,
    draggable: false,
});

/**
 *  admin user 
 */


function Register({ user, setUser}) { 


    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: typeof(user)    === 'undefined' ? '' : user.name,
            surname: typeof(user) === 'undefined' ? '' : user.surname, 
            title: typeof (user)  === 'undefined' ? 'Register user' : 'Edit profile', // do well!!
        }
    );

    const handleChange = event => {
        const name = event.target.name;
        const newValue = event.target.value;
        setUserInput({ [name]: newValue });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userInput.name.trim().length <= 3) {
            notifyWarning('The name must be bigger than 3 characters');
            return;
        }

        if (userInput.surname.trim().length <= 3) {
            notifyWarning('The surname must be bigger than 3 characters');
            return;
        }

        try {
            //// Guardar en STORE!!!!!!!!!!!!!!!!!!
            // setUserLS({ name: userInput.name, surname: userInput.surname });
            setUser({ name: userInput.name, surname: userInput.surname});
            notifySaved();

        } catch (error) {
            console.log(error);
            notifyError();            
        }

    }

    const notifySaved = () => toast.success('Profile saved !', { containerId: 'OK' });
    const notifyError = () => toast.error('Error on save !', { containerId: 'KO' });
    const notifyWarning = (warning) => toast.warning(warning, { containerId: 'KO' });
        
    return (
        <>
            <AppNavbar />
            <ToastContainer enableMultiContainer containerId={'OK'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'KO'} position={toast.POSITION.TOP_RIGHT} />

            <div style={{ padding: "20px", maxWidth: "420px", margin: "50px auto" }}>
                <h2>{userInput.title}</h2>
                <Form onSubmit = { handleSubmit }>
                    <Form.Group controlId="formGroupname" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" placeholder="Enter name" value={ userInput.name } onChange={ handleChange } />
                    </Form.Group>
                    <Form.Group controlId="formGroupsurname" >
                        <Form.Label>Surname</Form.Label>
                        <Form.Control name="surname" placeholder="surname" value={ userInput.surname } onChange={ handleChange } />
                    </Form.Group>

                    <Button variant="primary float-right" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        </>
    );
}

Register.propTypes = {
    user: PropTypes.object.isRequired,
    // setUser: PropTypes.func.isRequired,
}

export default Register;