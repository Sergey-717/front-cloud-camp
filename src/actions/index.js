export const addContact = () => {
  return {
    type: "ADD_NEW_USER",
  };
};

export const handleInputChange = (name, value) => {
  return {
    type: "HANDLE_INPUT_CHANGE",
    payload: { [name]: value },
  };
};

export const toggleModal = () => {
  return {
    type: "TOGGLE_MODAL",
  };
};
export const successModal = () => {
  return {
    type: "SUCCESS_RESULT",
  };
};
