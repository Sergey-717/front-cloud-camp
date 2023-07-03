import React from "react";
import { Link } from "react-router-dom";
import {
  ColumnContainer,
  ContentContainer,
  FlexContainer,
  FlexContainerForButtons,
} from "../../styles/containers";
import { ProgressStep2 } from "./components/icons/ProgressStep2";
import { ButtonContained, ButtonOutlined } from "../../styles/components";
import { RadioGroup } from "./components/RadioGroup";
import { CheckboxGroup } from "./components/CheckboxGroup";
import { Advantages } from "./components/Advantages";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../shared/Inputs";

export const Step2 = ({ newUser, setNewUserState }: any) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => data;
  return (
    <ContentContainer onSubmit={handleSubmit(onSubmit)}>
      <FlexContainer>
        {" "}
        <ProgressStep2 />
      </FlexContainer>
      <ColumnContainer>
        <Advantages newUser={newUser} setNewUserState={setNewUserState} />
        <CheckboxGroup newUser={newUser} setNewUserState={setNewUserState} />
        <RadioGroup newUser={newUser} setNewUserState={setNewUserState} />
      </ColumnContainer>
      <FlexContainerForButtons>
        <Link to="/front-cloud-camp/step1">
          <ButtonOutlined id="button-back">Назад</ButtonOutlined>
        </Link>
        <Link to="/front-cloud-camp/step3">
          <ButtonContained id="button-next">Далее</ButtonContained>
        </Link>
      </FlexContainerForButtons>
    </ContentContainer>
  );
};
