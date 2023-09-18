import React, { useState } from 'react';
import Card from './Components/UI/Card/Card';
import AddUser from './Components/AddUser/AddUser';
import UsersList from './Components/UserList/UsersList';
import ErrorModal from './Components/ErrorModal/ErrorModal';


function App() {

  const [userList, setUserList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const addUserHandler = (userDetails) => {
    setUserList((prevValue) => {
      return ([...prevValue, userDetails])
    });
  }

  const isAgeValid = (isValid, errorMessage) =>{
    setIsError(isValid);
    setModalContent(errorMessage); 
  }

  return (
    <React.Fragment>
      {isError && <ErrorModal closeModal={()=>setIsError(false)} content={modalContent} />}

      <Card>
        <AddUser addUser={addUserHandler} invalidAgeHandler={isAgeValid} />
      </Card>

      {userList.length > 0 &&
        <Card>
          <UsersList userList={userList} />
        </Card>
      }
    </React.Fragment>
  );
}

export default App;
