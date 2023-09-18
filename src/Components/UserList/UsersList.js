import classes from "./UsersList.module.css";

function UsersList(props) {
    return (
        <ul className={classes.users}>
            {props.userList.map((user, index) => <li key={index}>{`${user.userName}(${user.age} years old)`}</li>)}
        </ul>
    );
}

export default UsersList;