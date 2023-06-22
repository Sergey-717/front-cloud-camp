import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Step1 } from "./components/Step1/Step1";
import { Step2 } from "./components/Step2/Step2";
import { Step3 } from "./components/Step3/Step3";
import { NotFound } from "./components/NotFound/NotFound";
import { AppContainer } from "./styles/containers";
import { store } from "./store/configureStore";
import { handleInputChange } from "./actions";

function App() {
  store.subscribe(() => console.log(store.getState()));
  const [newUser, setNewUser] = useState(store.getState().newUser);
  const setNewUserState = (name: any, value: any) => {
    store.dispatch(handleInputChange(`${name}`, value));
    setNewUser(store.getState().newUser);
  };
  // store.dispatch(toggleModal());
  // console.log(store.getState());
  return (
    <div className="App">
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Main newUser={newUser} setNewUserState={setNewUserState} />
              }
            ></Route>
            <Route
              path="/step1"
              element={
                <Step1 newUser={newUser} setNewUserState={setNewUserState} />
              }
            ></Route>
            <Route
              path="/step2"
              element={
                <Step2 newUser={newUser} setNewUserState={setNewUserState} />
              }
            ></Route>
            <Route
              path="/step3"
              element={
                <Step3 newUser={newUser} setNewUserState={setNewUserState} />
              }
            ></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </div>
  );
}

export default App;
