import React from "react";
import Header from "./Header";
import AddUserModal from "../containers/AddUserModal";
import RemoveUserModal from "../containers/RemoveUserModal";
import HomePageBody from "./HomePageBody";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

/**
 * This is the HomePage Component
 * This component is resposible for rendering the Homepage Components
 * @param {Object} props
 * @returns Header, Body, Modals
 */

function HomePageComponent({
  userList,
  isAddUserOpen,
  isRemoveUserOpen,
  openAddUserModal,
  openRemoveUserModal,
  addNewUser,
  removeUser,
  setIsAddUserOpen,
  setIsRemoveUserOpen,
}) {
  return (
    <div className="container">
      <Header
        openAddUserModal={openAddUserModal}
        openRemoveUserModal={openRemoveUserModal}
      />
      <HomePageBody userList={userList} />
      {isAddUserOpen && (
        <AddUserModal
          addNewUser={addNewUser}
          closeModal={() => setIsAddUserOpen(false)}
        />
      )}
      {isRemoveUserOpen && (
        <RemoveUserModal
          removeUser={removeUser}
          closeModal={() => setIsRemoveUserOpen(false)}
        />
      )}
    </div>
  );
}

export default HomePageComponent;
