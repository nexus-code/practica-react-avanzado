import React, { useReducer } from "react";

import Canvas from '../Canvas/Canvas';

import { PropTypes }    from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

/**
 *  user handler
 */

export default function Register({ user, setUser }) { 

    console.log('Register user', user);

    // uses toast to ui add notifications   
    const notifyWarning = (warning) => toast.warning(warning);
    ///

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

    const handleSubmit = event => {
        event.preventDefault();

        if (userInput.name.trim().length <= 3) {
            notifyWarning('The name must be bigger than 3 characters');
            return;
        }

        if (userInput.surname.trim().length <= 3) {
            notifyWarning('The surname must be bigger than 3 characters');
            return;
        }

        setUser({ name: userInput.name, surname: userInput.surname});
    }
        
    return (
        <Canvas>
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
        </Canvas>
    );
}

Register.propTypes = {
    user: PropTypes.object,//.isRequired,
    // setUser: PropTypes.func.isRequired,
}