import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card'
import ErrorModel from '../UI/ErrorModel';
import Classes from './AddUser.module.css'
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState('')

    const nameInputRef = useRef()
    const ageInputRef = useRef()



    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;


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

        props.onAddUser(enteredName, enteredUserAge);
        //setEnteredUsername(' ');
        //        setEnteredAge('')

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
                    <input
                        id='username'
                        type="text"
                        //              onChange={usernameChangeHandler}
                        //            value={enteredUsername}
                        ref={nameInputRef} />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id='age'
                        type="number"
                        //          onChange={ageChangeHandler}
                        //        value={enteredAge}
                        ref={ageInputRef} />
                    <Button type='submit'>Add User</Button>

                </form>

            </Card>
        </Wrapper>
    );
};

export default AddUser; 