import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card'
import ErrorModel from '../UI/ErrorModel';
import Classes from './AddUser.module.css'


const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {

        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;

        }

        if (+enteredAge < 1) {
            return;

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

    return (

        <>
            <ErrorModel title='Ooops there is an error' messsage='Something is wrong' />



            <Card className={Classes.input}>

                <form onSubmit={addUserHandler} >
                    <label htmlFor="username" >Username</label>
                    <input id='username' type="text" onChange={usernameChangeHandler} value={enteredUsername} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id='age' type="number" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type='submit'>Add User</Button>
                </form>

            </Card>
        </>
    );
};

export default AddUser;