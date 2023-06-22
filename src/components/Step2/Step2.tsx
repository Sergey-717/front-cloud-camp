import React from "react";
import { Link } from "react-router-dom";
import {
  ColumnContainer,
  ContentContainer,
  FlexContainer,
  FlexContainerForButtons,
} from "../../styles/containers";
import { ProgressStep2 } from "./components/ProgressStep2";
import { ButtonContained, ButtonOutlined } from "../../styles/components";
import { RadioGroup } from "./components/RadioGroup";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { Advantages } from "./components/Advantages";
import { SubmitHandler, useForm } from "react-hook-form";

const listOfComponents = [Advantages, CheckboxGroup, RadioGroup];

type Inputs = {
  advantages: string[];
  checkbox: number[];
  radio: number;
};
export const Step2 = ({ newUser, setNewUserState }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => data;
  return (
    <ContentContainer onSubmit={handleSubmit(onSubmit)}>
      <ProgressStep2 />
      <ColumnContainer>
        <Advantages newUser={newUser} setNewUserState={setNewUserState} />
        <CheckboxGroup newUser={newUser} setNewUserState={setNewUserState} />
        <RadioGroup newUser={newUser} setNewUserState={setNewUserState} />
      </ColumnContainer>
      <FlexContainerForButtons>
        <Link style={{ textDecoration: "none" }} to="/step1">
          <ButtonOutlined id="button-back">Назад</ButtonOutlined>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/step3">
          <ButtonContained id="button-next">Далее</ButtonContained>
        </Link>
      </FlexContainerForButtons>
    </ContentContainer>
  );
};
