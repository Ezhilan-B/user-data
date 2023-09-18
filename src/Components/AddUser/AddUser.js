import { useState } from "react";
import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";

function AddUser(props) {

    const userInitalValue = {
        userName: "",
        age: ""
    };
    const ageError = "Please enter a valid age > 0";
    const inputError = "Enter valid name and age(non-empty values)";
    const [userDetails, setUserDetails] = useState(userInitalValue);

    const inputChangeHandler = (event) => {
        setUserDetails((prevValue) => {
            return (
                {
                    ...prevValue,
                    [event.target.id]: event.target.value
                }
            )
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if ((userDetails.age > 0) && (userDetails.userName.trim().length > 0)) {
            props.addUser(userDetails);
            setUserDetails(userInitalValue);
        } else if (userDetails.age < 0) {
            props.invalidAgeHandler(true, ageError);
        } else {
            props.invalidAgeHandler(true, inputError);
        }
    }

    return (
        <form className={classes.input} onSubmit={submitHandler}>
            <label>Username</label>
            <input type="text" id="userName" value={userDetails.userName} onChange={inputChangeHandler} />
            <label>Age(Years)</label>
            <input type="number" id="age" value={userDetails.age} onChange={inputChangeHandler} />
            <Button type="submit">Add User</Button>
        </form>
    )
}

export default AddUser;