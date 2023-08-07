import React, { useState } from "react";
import classes from './AddUsers.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
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
    return <Card className={classes.input} >
    <form onSubmit={formHandler}>
        <label>Username</label>
        <input onChange={inputHandler} type="text"/>
        <label>Age (Years old)</label>
        <input onChange={ageHandler} type="number"/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
}

export default AddUser;