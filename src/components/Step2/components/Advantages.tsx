import React, { useState } from "react";
import {
  DeleteButtonOutlined,
  InputStep,
  PlusButtonOutlined,
} from "../../../styles/components";
import {
  BlockContainerMiddleGap,
  ColumnContainer,
  FlexContainer,
} from "../../../styles/containers";
import { IconTrash } from "./IconTrash";
import { PlusIcon } from "./PlusIcon";
import { Advantage } from "./Advantage";

export const Advantages = ({ newUser, setNewUserState }: any) => {
  const [advantages, setAdvantages] = useState([1, 2, 3]);

  const oneAdvantageMore = () => {
    // setNewUserState("advantages", [...newUser.advantages, ""]);
    setAdvantages([...advantages, advantages.length + 1]);
  };
  const DeleteAdvantage = (value: string) => {
    setNewUserState([...newUser.advantages.filter((el: any) => el !== value)]);
    setAdvantages([...advantages.filter((el: any) => el !== value)]);
  };
  const afterFocus = (value: string) => {
    !newUser.advantages.includes(value) &&
      !!value.length &&
      setNewUserState("advantages", [...newUser.advantages, value]);
    // setAdvantages([...advantages, ...newUser.advantages]);
  };
  console.log(advantages);
  return (
    <ColumnContainer>
      <BlockContainerMiddleGap>
        <label>Advantages</label>
        <Advantage></Advantage>
        <Advantage></Advantage>
        <Advantage></Advantage>
        {/* {advantages.map((advantage: any, index: number) => (
          <FlexContainer key={advantage}>
            <InputStep
              id={`field-advantages-${advantage}`}
              placeholder="Placeholder"
              onBlur={(e) => afterFocus(e.target.value)}
              // onChange={(e) => setAdvantages([...newUser.advantages[index] = e.target.value])}
              value={newUser.advantages[index]}
            />

            <DeleteButtonOutlined
              onClick={() => DeleteAdvantage(advantage)}
              id={`button-remove-${advantage}`}
            >
              <IconTrash />
            </DeleteButtonOutlined>
          </FlexContainer>
        ))} */}

        <PlusButtonOutlined onClick={oneAdvantageMore} id="button-add">
          <PlusIcon color="#5558fa" />
        </PlusButtonOutlined>
      </BlockContainerMiddleGap>
    </ColumnContainer>
  );
};
