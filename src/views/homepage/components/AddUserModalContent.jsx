import { Form, FormGroup, Label, Col, Input } from "reactstrap";

/**
 * This component represents the view of Add User Modal
 * It contains the form and all the inputs for getting the details of the new user
 * @param {Object} props
 * @returns Form
 */

function AddUserModalContent({ formValues, updateFormInput, validationObj }) {
  const { isNameValid, isEmailValid, isAddressValid, isDateValid } =
    validationObj;

  return (
    <Form>
      <FormGroup row>
        <Label sm={2}>Name</Label>
        <Col sm={10}>
          <Input
            valid={isNameValid}
            invalid={!isNameValid}
            value={formValues["name"]}
            onChange={updateFormInput}
            id="name"
            placeholder="John Doe"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2}>Email</Label>
        <Col sm={10}>
          <Input
            valid={isEmailValid}
            invalid={!isEmailValid}
            id="email"
            value={formValues["email"]}
            onChange={updateFormInput}
            placeholder="abc@gmail.com"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2}>Address</Label>
        <Col sm={10}>
          <Input
            valid={isAddressValid}
            invalid={!isAddressValid}
            value={formValues["address"]}
            onChange={updateFormInput}
            id="address"
            placeholder="West Bengal, India"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2}>Joining</Label>
        <Col sm={10}>
          <Input
            valid={isDateValid}
            invalid={!isDateValid}
            value={formValues["joining"]}
            onChange={updateFormInput}
            id="joining"
            placeholder="11/01/2022"
          />
        </Col>
      </FormGroup>
    </Form>
  );
}

export default AddUserModalContent;
