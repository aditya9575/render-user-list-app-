import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
// import UserForm from './components/UserForm/UserForm';

function App() {

// here we use state to send data to our users list as its the closest parent 
const [usersList , setUsersList] = useState([])

const addUserHandler = (uName , uAge) =>{
       setUsersList((prevUsersList)=>{
        return [...prevUsersList, {name:uName , age:uAge , id:Math.random().toString()}]
       })
}

  return (
    <div>
      {/* <UserForm/> */}
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
