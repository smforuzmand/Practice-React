//this fucntional component is responsible to outputting the user data

import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css'

const UserList = (props) => {
    return (
        //we add this blow code to not only add the card class but also to have the users style
        <Card className={classes.users}>
            <ul>

                {props.users.map((user) => {

                    <li> {user.name} ({user.age} Years old)</li>


                })}


            </ul>
        </Card>
    );
};

export default UserList;