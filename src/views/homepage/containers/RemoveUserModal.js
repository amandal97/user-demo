import React from "react";
import UserModal from "../../../common/UserModal";
import RemoveUserModalContent from "../components/RemoveUserModalContent";

/**
 * This is the Container for Remove User Modal
 * It contains all the business logics regarding the functionality of removing user
 * @param {Object} props
 * @returns UserModal Generic Component
 */

function RemoveUserModal({ removeUser, closeModal }) {
  // Local State that contains the user id typed
  const [userId, setUserId] = React.useState("");

  // Handler function to update the local state with the form input
  const updateFormInput = (e) => {
    setUserId(e.target.value);
  };

  // Handler function to remove the user
  const submitForm = () => {
    removeUser(userId);
    setUserId("");
    closeModal();
  };

  // Handler function to close the modal
  const cancelForm = () => {
    setUserId("");
    closeModal();
  };

  // Handler function to check validity of the input
  const validateForm = () => {
    return userId ? true : false;
  };
  const isIdValid = validateForm();

  return (
    <UserModal
      submitForm={submitForm}
      cancelForm={cancelForm}
      isAllValid={isIdValid}
      title="Remove User"
      actionName="Remove User">
      <RemoveUserModalContent
        userId={userId}
        updateFormInput={updateFormInput}
        isIdValid={isIdValid}
      />
    </UserModal>
  );
}

export default RemoveUserModal;
