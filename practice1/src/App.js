import './App.css';
import React, { useState } from 'react';
import AddUser from './componenets/Users/AddUser';
import UserList from './componenets/Users/UserList';





function App() {
  const [UserList, setUserList] = useState([])
  return (
    <div >
      <AddUser />
      <UserList users={UserList} />
    </div>
  );
}

export default App;
