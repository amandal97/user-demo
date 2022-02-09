import React from "react";
import { v4 as uuidv4 } from "uuid";
import HomePage from "../components/HomePageComponent";

/**
 * This is the HomePage Screen Container
 * It contains all the manipulation/interactive logics regarding the screen
 * @returns HomePage Component
 */

function HomePageContainer() {
  // Local State that stores the list of users
  const [userList, setUserList] = React.useState([]);
  // Local State for opening/closing the Add User Modal
  const [isAddUserOpen, setIsAddUserOpen] = React.useState(false);
  // Local State for opening/closing the Remove User Modal
  const [isRemoveUserOpen, setIsRemoveUserOpen] = React.useState(false);

  // Handler to open the Add User Modal
  const openAddUserModal = () => setIsAddUserOpen(true);

  // Handler to open the Remove User Modal
  const openRemoveUserModal = () => setIsRemoveUserOpen(true);

  // Add new user to the list
  const addNewUser = (formInputs) => {
    const newUser = { id: uuidv4().slice(0, 5), ...formInputs };
    setUserList((prevState) => [...prevState, newUser]);
  };

  // Filter the user entered the Remove User Modal
  const removeUser = (id) => {
    const updatedUsers = userList.filter((item) => item.id !== id);
    if (userList.length === updatedUsers.length) {
      alert("No Such User Found!");
      return;
    }
    setUserList(updatedUsers);
  };
  return (
    <HomePage
      userList={userList}
      isRemoveUserOpen={isRemoveUserOpen}
      isAddUserOpen={isAddUserOpen}
      openAddUserModal={openAddUserModal}
      openRemoveUserModal={openRemoveUserModal}
      addNewUser={addNewUser}
      removeUser={removeUser}
      setIsAddUserOpen={setIsAddUserOpen}
      setIsRemoveUserOpen={setIsRemoveUserOpen}
    />
  );
}

export default HomePageContainer;
