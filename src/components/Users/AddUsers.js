import React, { useState } from "react";

const AddUser =()=>{
    const [userInput, setUserInput] = useState('');
    const [userAge, setUserAge] = useState('');
    const inputHandler =(event)=>{
setUserInput(event.target.value);
    }

    const ageHandler =(event)=>{
setUserAge(event.target.value);
    }
    const formHandler =(event)=>{
event.preventDefault();
if(userInput.trim().length===0 || userAge.trim().length===0){
    return;
}
if(+userAge< 1){
    return;
}
    }
    return <form onSubmit={formHandler}>
        <label>Username</label>
        <input onChange={inputHandler} type="text"/>
        <label>Username</label>
        <input onChange={ageHandler} type="number"/>
        <button type="submit">Add User</button>
    </form>
}

export default AddUser;