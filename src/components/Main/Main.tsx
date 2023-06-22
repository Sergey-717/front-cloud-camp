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
import { Avatar } from "./Avatar";
import { IconFolder } from "./IconFolder";
import { ButtonContained, InputMain } from "../../styles/components";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  phone: string;
  email: string;
};

const myLinks = ["Telegram", "Github", "Resume"];

export const Main = ({ newUser, setNewUserState }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => data;
  console.log(errors);
  return (
    <ContentContainer onSubmit={handleSubmit(onSubmit)}>
      <ColumnContainer>
        <FlexContainer>
          <Avatar />
          <BlockContainerMiddleGap>
            <h3>Иван Иванов</h3>
            <FlexContainer>
              {myLinks.map((link) => (
                <Link to="/" style={{ textDecoration: "none" }} key={link}>
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
              placeholder="+7 999 999-99-99"
              type="text"
              {...register("phone", { required: true })}
              value={newUser.phone}
              onChange={(e) => setNewUserState("phone", e.target.value)}
            ></InputMain>
            {errors.phone && <span>This field is required</span>}
          </BlockContainerMiddleGap>
          <BlockContainerMiddleGap>
            <label>Email</label>
            <InputMain
              placeholder="tim.jennings@example.com"
              type="email"
              {...register("email", { required: true })}
              onChange={(e) => setNewUserState("email", e.target.value)}
              value={newUser.email}
            ></InputMain>
            {errors.email && <span>This field is required</span>}
          </BlockContainerMiddleGap>
          <FlexContainerForButtons>
            <Link style={{ textDecoration: "none" }} to="/step1" type="submit">
              <ButtonContained type="submit" id="button-start">
                Начать
              </ButtonContained>
            </Link>
          </FlexContainerForButtons>
        </BlockContainerMiddleGap>
      </ColumnContainer>
    </ContentContainer>
  );
};
