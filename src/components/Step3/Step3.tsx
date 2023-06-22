import React from "react";
import { Link } from "react-router-dom";
import {
  ColumnContainer,
  ContentContainer,
  FlexContainer,
  FlexContainerForButtons,
} from "../../styles/containers";
import { ProgressStep3 } from "./ProgressStep3";
import {
  ButtonOutlined,
  ButtonContained,
  InputStep,
  InputAbout,
} from "../../styles/components";
import { Modal } from "../Modal/Modal";
export const Step3 = ({ newUser, setNewUserState }: any) => {
  return (
    <ContentContainer>
      <ProgressStep3 />
      <ColumnContainer>
        <label>About</label>
        <InputAbout
          id="field-advantages-1"
          placeholder="Placeholder"
          onChange={(e) => setNewUserState("about", e.target.value)}
          value={newUser.about}
        ></InputAbout>
      </ColumnContainer>
      <FlexContainerForButtons>
        <Link style={{ textDecoration: "none" }} to="/step2">
          <ButtonOutlined>Назад</ButtonOutlined>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/">
          <ButtonContained>Отправить</ButtonContained>
        </Link>
      </FlexContainerForButtons>
      {/* <Modal /> */}
    </ContentContainer>
  );
};
