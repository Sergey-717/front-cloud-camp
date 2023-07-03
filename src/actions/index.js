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
export const resultModal = (response) => {
  return {
    type: "RESULT",
    payload: { response },
  };
};
