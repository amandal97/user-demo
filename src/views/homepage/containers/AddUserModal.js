import React from "react";
import UserModal from "../../../common/UserModal";
import AddUserModalContent from "../components/AddUserModalContent";
import { validateForm } from "../../../utils/formUtils";

/**
 * This is the Container for Add User Modal
 * It contains all the business logics regarding the functionality of adding new user
 * @param {Object} props
 * @returns UserModal Generic Component
 */

function AddUserModal({ closeModal, addNewUser }) {
  // Initial state of all the form inputs
  const initialState = {
    name: "",
    email: "",
    address: "",
    joining: "",
  };

  // local state for storing all the form inputs
  const [formValues, setFormValues] = React.useState(initialState);

  // handler function for updating the form inputs
  const updateFormInput = (e) => {
    setFormValues((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  // Adds the user to the list
  const submitForm = () => {
    addNewUser(formValues);
    setFormValues(initialState);
    closeModal();
  };

  // Closes the modal upon click
  const cancelForm = () => {
    setFormValues(initialState);
    closeModal();
  };

  // Below object mentions which inputs are valid/invalid
  const validationObj = validateForm(formValues);

  return (
    <UserModal
      submitForm={submitForm}
      cancelForm={cancelForm}
      isAllValid={validationObj?.isAllValid}
      title="Add New User"
      actionName="Add User">
      <AddUserModalContent
        formValues={formValues}
        updateFormInput={updateFormInput}
        validationObj={validationObj}
      />
    </UserModal>
  );
}

export default AddUserModal;
