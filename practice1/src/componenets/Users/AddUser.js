import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card'
import ErrorModel from '../UI/ErrorModel';
import Classes from './AddUser.module.css'
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState('')




    const addUserHandler = (event) => {

        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'insert a valid name and age'
            });

        }

        if (+enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'insert a valid  age'
            });

        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername(' ');
        setEnteredAge('')
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {

    }

    return (

        <Wrapper>
            {error && (<ErrorModel title={error.title} messsage={error.message} onConfirm={errorHandler} />)}


            <Card className={Classes.input}>

                <form onSubmit={addUserHandler} >
                    <label htmlFor="username" >Username</label>
                    <input id='username' type="text" onChange={usernameChangeHandler} value={enteredUsername} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id='age' type="number" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type='submit'>Add User</Button>
                </form>

            </Card>
        </Wrapper>
    );
};

export default AddUser;