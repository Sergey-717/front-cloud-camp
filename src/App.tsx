import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Step1 } from "./components/Step1/Step1";
import { Step2 } from "./components/Step2/Step2";
import { Step3 } from "./components/Step3/Step3";
import { NotFound } from "./components/NotFound/NotFound";
import { AppContainer } from "./styles/containers";
import { store } from "./store/configureStore";
import { handleInputChange, toggleModal } from "./actions";
import { Modal } from "./components/Modal/Modal";

function App() {
  // store.subscribe(() => console.log(store.getState()));
  const [newUser, setNewUser] = useState(store.getState().newUser);
  const [modalState, setModalState] = useState(
    store.getState().modal.isModalActive
  );

  const setNewUserState = (name: any, value: any) => {
    store.dispatch(handleInputChange(`${name}`, value));
    setNewUser(store.getState().newUser);
  };
  const handleActiveModalState = () => {
    store.dispatch(toggleModal());
    setModalState(store.getState().modal.isModalActive);
  };

  // store.dispatch(toggleModal());
  // console.log(store.getState());
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route
            path="/front-cloud-camp"
            element={
              <Main newUser={newUser} setNewUserState={setNewUserState} />
            }
          ></Route>
          <Route
            path="/front-cloud-camp/step1"
            element={
              <Step1 newUser={newUser} setNewUserState={setNewUserState} />
            }
          ></Route>
          <Route
            path="/front-cloud-camp/step2"
            element={
              <Step2 newUser={newUser} setNewUserState={setNewUserState} />
            }
          ></Route>
          <Route
            path="/front-cloud-camp/step3"
            element={
              <Step3
                newUser={newUser}
                setNewUserState={setNewUserState}
                handleActiveModalState={handleActiveModalState}
                modalState={modalState}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {modalState && (
          <Modal
            modalState={modalState}
            handleActiveModalState={handleActiveModalState}
          ></Modal>
        )}
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
