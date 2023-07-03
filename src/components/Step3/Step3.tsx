import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ColumnContainer,
  ContentContainer,
  FlexContainer,
  FlexContainerForButtons,
  FlexContainerForTips,
} from "../../styles/containers";
import { ProgressStep3 } from "./ProgressStep3";
import {
  ButtonOutlined,
  ButtonContained,
  InputAbout,
  LengthCounter,
} from "../../styles/components";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Inputs } from "../shared/Inputs";
import { store } from "../../store/configureStore";
import { resultModal } from "../../actions";

const API_URL = `https://api.sbercloud.ru/content/v1/bootcamp/frontend/`;

export const Step3 = ({
  newUser,
  setNewUserState,
  handleActiveModalState,
}: any) => {
  const [aboutArea, setAboutArea] = useState(newUser.about);
  const handleChange = (value: string) => {
    setAboutArea(value);
  };
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => data;

  // const handleDataModalState = (name: string, value: string) => {
  //   store.dispatch(resultModal(`${name}`, value));
  // };

  const sendData = useCallback(async () => {
    const data = await axios
      .post(API_URL, newUser)
      .then((response) => {
        store.dispatch(resultModal(response.data));
        handleActiveModalState();
      })
      .catch((error) => error)
      .finally();

    // console.log(Object.values(data));
  }, []);

  return (
    <ContentContainer onSubmit={handleSubmit(onSubmit)}>
      <FlexContainer>
        {" "}
        <ProgressStep3 />
      </FlexContainer>
      <ColumnContainer>
        <label>About</label>
        <InputAbout
          id="field-advantages-1"
          placeholder="Placeholder"
          onChange={(e) => handleChange(e.target.value)}
          onBlur={() => setNewUserState("about", aboutArea)}
          value={aboutArea}
          maxLength={200}
        ></InputAbout>
      </ColumnContainer>
      <FlexContainerForTips>
        <p>Tip</p>
        <LengthCounter>
          {aboutArea.replace(/ /g, "").length} / 200
        </LengthCounter>
      </FlexContainerForTips>
      <FlexContainerForButtons>
        <Link to="/step2">
          <ButtonOutlined>Назад</ButtonOutlined>
        </Link>
        <ButtonContained onClick={sendData}>Отправить</ButtonContained>
      </FlexContainerForButtons>
    </ContentContainer>
  );
};
