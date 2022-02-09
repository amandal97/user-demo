import { Button } from "reactstrap";

/**
 * This is the HomePage Header Component
 * It contains the Add User and Remove User Buttons
 * @param {Object} props
 * @returns Buttons
 */

function Header({ openAddUserModal, openRemoveUserModal }) {
  return (
    <div className="header">
      <Button color="primary" className="button" onClick={openAddUserModal}>
        Add User
      </Button>
      <Button color="danger" className="button" onClick={openRemoveUserModal}>
        Remove User
      </Button>
    </div>
  );
}

export default Header;
