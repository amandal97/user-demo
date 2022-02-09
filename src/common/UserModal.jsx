import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

/**
 * This is the Generic Modal Component
 *
 * 1. It displays the main content from its children prop, hence its generic
 * 2. Header title can be set uing "title" prop
 * 3. Submit Button name can be set using "actionName" prop
 *
 * @param {Object} props
 * @returns Modal
 */

function UserModal({
  title,
  actionName,
  isAllValid,
  submitForm,
  cancelForm,
  children,
}) {
  return (
    <Modal isOpen centered>
      <ModalHeader toggle={cancelForm}>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter>
        <Button disabled={!isAllValid} color="primary" onClick={submitForm}>
          {actionName}
        </Button>{" "}
        <Button onClick={cancelForm}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default UserModal;
