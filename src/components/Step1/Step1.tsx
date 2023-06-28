import React from "react";
import { Link } from "react-router-dom";
import {
  BlockContainerMiddleGap,
  ColumnContainer,
  ContentContainer,
  FlexContainerForButtons,
} from "../../styles/containers";
import {
  ButtonContained,
  ButtonOutlined,
  InputStep,
  Selector,
} from "../../styles/components";
import { ProgressStep1 } from "./ProgressStep1";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../shared/Inputs";

const tittles = ["nickname", "name", "surname", "sex"];
export const Step1 = ({ newUser, setNewUserState }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <ContentContainer onSubmit={handleSubmit(onSubmit)}>
      <ProgressStep1 />
      <ColumnContainer>
        {tittles.map((tittle) => (
          <BlockContainerMiddleGap key={tittle}>
            <label>{tittle}</label>
            {tittle === "sex" ? (
              <Selector
                id="field-sex"
                {...register("sex", { required: true })}
                onChange={(e) => setNewUserState(`${tittle}`, e.target.value)}
                value={newUser[tittle]}
              >
                <option></option>
                <option id="field-sex-option-man">man</option>
                <option id="field-sex-option-woman">woman</option>
              </Selector>
            ) : (
              <InputStep
                id={`field-${tittle}`}
                type="text"
                // {...register("nickname", { required: true })}
                onChange={(e) => setNewUserState(`${tittle}`, e.target.value)}
                value={newUser[tittle]}
              ></InputStep>
            )}
            {/* {errors.label && <span>This field is required</span>} */}
          </BlockContainerMiddleGap>
        ))}
      </ColumnContainer>
      <FlexContainerForButtons>
        <Link style={{ textDecoration: "none" }} to="/">
          <ButtonOutlined id="button-back">Назад</ButtonOutlined>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/step2" type="submit">
          <ButtonContained id="button-next">Далее</ButtonContained>
        </Link>
      </FlexContainerForButtons>
    </ContentContainer>
  );
};
