import { Form, FormGroup, Label, Col, Input } from "reactstrap";

/**
 * This component represents the view of Remove User Modal
 * It contains the form and all the inputs for getting the id the selected user
 * @param {Object} props
 * @returns Form
 */

function RemoveUserModalContent({ userId, updateFormInput, isIdValid }) {
  return (
    <Form>
      <FormGroup row>
        <Label sm={2}>User ID</Label>
        <Col sm={10}>
          <Input
            valid={isIdValid}
            invalid={!isIdValid}
            value={userId}
            onChange={updateFormInput}
            id="name"
            placeholder="ea3ry"
          />
        </Col>
      </FormGroup>
    </Form>
  );
}

export default RemoveUserModalContent;
