import React, { useState } from "react";

const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [showWarning, setShowWarning] = useState(false); // new state variable
  const [showAgeWarning, setShowAgeWarning] = useState(false); // new state variable for age warning

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserAge = (e) => {
    setAge(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if(userName.length === 0 || age.length === 0) {
      setShowWarning(true); // show the warning
      return; // return early to prevent the age warning from showing
    }

    if(age < 0) {
      setShowAgeWarning(true); // show the age warning
      return; // return early to prevent the form from being submitted
    }

    let userDetails = {
      Name: userName,
      Age: age,
    };

    console.log(userDetails);

    //setting the input fields back to empty after the form submission 
    setUserName("");
    setAge("");
    setShowWarning(false); // hide the warning
    setShowAgeWarning(false); // hide the age warning
  };

  const handleCloseWarning = () => {
    setShowWarning(false); // hide the warning when "Okay" button is clicked
    setShowAgeWarning(false); // hide the age warning when "Okay" button is clicked
  };

  return (
    <div>
      {showWarning && (
        <div>
          <h1>Invalid Input</h1>
          <p>Please enter a valid name (non-empty value).</p>
          <button type='button' onClick={handleCloseWarning}>Okay</button>
        </div>
      )}
      {showAgeWarning && (
        <div>
          <h1>Invalid Input</h1>
          <p>Please enter a valid age (> 0).</p>
          <button type='button' onClick={handleCloseWarning}>Okay</button>
        </div>
      )}
      <form onSubmit={handleForm}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          value={userName}
          name="Username"
          id="Username"
          onChange={handleUserName}
        />

        <label htmlFor="Ageno">Age(years)</label>
        <input
          type="number"
          value={age}
          name="Ageno"
          id="Ageno"
          onChange={handleUserAge}
        />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;



[Note:- this component renders a form that has userName and userAge as 2 input fields and a button submit , we have used conditional rendering , useState hook and event listeners to keep 
  track of the data whilst displaying the error messages in case of the user trying to submit age in -ve or giving errors even in case of user trying to submit without data in both inputs]
