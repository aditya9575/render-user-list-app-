import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error,setError] = useState("");
 

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserAge = (e) => {
    setAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

 
if(userName.trim().length === 0 || age.trim().length === 0) {
  setError({
    title:'Invalid input',
    message:'Please enter a valid name and age (non-empty values).'
  })
  return; 
}

if(+age <= 0) {
  setError({
    title:'Invalid age',
    message:'Please enter a valid age (> 0).'
  })
  return; 
}
 
    // let userDetails = {
    //   Name: userName,
    //   Age: age,
    // };

    // console.log(userDetails);

    //using props to lift state up and send data to app component 
    props.onAddUser(userName , age );

    setUserName("");
    setAge("");
  };

 const errorHandler =()=>{
  setError(null);
 }

  return (
    <div>
   { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/> }
    <Card className={classes.input}>

      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={userName}
          name="Username"
          id="username"
          onChange={handleUserName}
        />

        <label htmlFor="age">Age(years)</label>
        <input
          type="number"
          value={age}
          name="Ageno"
          id="age"
          onChange={handleUserAge}
        />
        

        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
