//this fucntional component is responsible to outputting the user data

import React from 'react';
import Card from '../UI/Card';

const UserList = (props) => {
    return (
        <Card>
            <ul>

                {props.users.map((user) => {

                    <li> {user.name} {user.age}</li>


                })}


            </ul>
        </Card>
    );
};

export default UserList;