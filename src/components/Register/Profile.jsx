import React, { useReducer } from "react";
import { Form, Button } from 'react-bootstrap';
import { setUserLS }    from '../../utils/localStorage';
import AppNavbar        from '../AppNavbar/AppNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    autoClose: 8000,
    draggable: false,
});

function Profile({user}) { 

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: user.name,
            surname: user.surname,
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
            alert("The name must be bigger than 3 characters");
            return;
        }

        if (userInput.surname.trim().length <= 3) {
            alert("The surname must be bigger than 3 characters");
            return;
        }

        try {
            
            setUserLS({ name: userInput.name, surname: userInput.surname});

            notifySaved();

        } catch (error) {
            
            notifyError();            
        }

    }

    const notifySaved = () => toast.success('Profile saved !', { containerId: 'OK' });
    const notifyError = () => toast.error('Error on save !', { containerId: 'KO' });

        
    return (
        <>
            <AppNavbar />
            <ToastContainer enableMultiContainer containerId={'OK'} position={toast.POSITION.TOP_RIGHT} />
            <ToastContainer enableMultiContainer containerId={'KO'} position={toast.POSITION.TOP_RIGHT} />

            <div style={{ padding: "20px", maxWidth: "420px", margin: "50px auto" }}>
                <h2>Edit profile</h2>
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

export default Profile;