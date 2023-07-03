import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ContentContainer,
  Divider,
  ColumnContainer,
  FlexContainer,
  FlexContainerForButtons,
  BlockContainerMiddleGap,
} from "../../styles/containers";
import { Avatar } from "./icons/Avatar";
import { IconFolder } from "./icons/IconFolder";
import { ButtonContained, InputMain } from "../../styles/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../shared/Inputs";

const myLinks = ["Telegram", "Github", "Resume"];

export const Main = ({ newUser, setNewUserState }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [phone, setPhone] = useState(newUser.phone);
  const handleSetPhone = (value: string) => {
    setPhone(value);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => data;
  // console.log(errors);
  return (
    <ContentContainer onSubmit={handleSubmit(onSubmit)}>
      <FlexContainer>
        <Avatar />
        <BlockContainerMiddleGap>
          <h3>Иван Иванов</h3>
          <FlexContainer>
            {myLinks.map((link) => (
              <Link to="/" key={link}>
                <IconFolder />
                {link}
              </Link>
            ))}
          </FlexContainer>
        </BlockContainerMiddleGap>
      </FlexContainer>
      <Divider />
      <BlockContainerMiddleGap>
        <BlockContainerMiddleGap>
          <label>Номер телефона</label>

          <InputMain
            id="field-phone"
            placeholder="+7 (999) 999-99-99"
            {...register("phone", { required: true })}
            value={phone}
            onChange={(e) => handleSetPhone(e.target.value)}
            onBlur={() => setNewUserState("phone", phone)}
          ></InputMain>
          {errors.phone && <span>This field is required</span>}
        </BlockContainerMiddleGap>
        <BlockContainerMiddleGap>
          <label>Email</label>
          <InputMain
            id="field-email"
            placeholder="tim.jennings@example.com"
            type="email"
            {...register("email", { required: true })}
            onChange={(e) => setNewUserState("email", e.target.value)}
            value={newUser.email}
          ></InputMain>
          {errors.email && <span>This field is required</span>}
        </BlockContainerMiddleGap>
        <FlexContainerForButtons>
          <Link to="/step1" type="submit">
            <ButtonContained type="submit" id="button-start">
              Начать
            </ButtonContained>
          </Link>
        </FlexContainerForButtons>
      </BlockContainerMiddleGap>
    </ContentContainer>
  );
};
