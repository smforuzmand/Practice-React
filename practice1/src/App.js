import './App.css';
import React, { useState } from 'react';
import AddUser from './componenets/Users/AddUser';
import UserList from './componenets/Users/UserList';





function App() {
  const [UserList, setUserList] = useState([])
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => { })
    return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
  }


  return (
    //this is a way that we can use it instead of div wrapper or previous wrapper we were using
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={UserList} />
    </>
  );
}

export default App;
