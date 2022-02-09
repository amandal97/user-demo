/**
 * Form Validation logic is present here
 * @param {Object} formValues all the properties in the form
 * @returns Object mentioning the validity of all properties
 */

export const validateForm = (formValues) => {
  const namePattern = /[a-zA-Z][a-zA-Z ]*/;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const dateformat =
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  const isNameValid = formValues?.name && namePattern.test(formValues?.name);
  const isEmailValid = emailPattern.test(formValues?.email);
  const isAddressValid = formValues?.address ? true : false;
  const isDateValid = dateformat.test(formValues?.joining);

  const isAllValid =
    isNameValid && isEmailValid && isAddressValid && isDateValid;

  return {
    isNameValid,
    isEmailValid,
    isAddressValid,
    isDateValid,
    isAllValid,
  };
};
