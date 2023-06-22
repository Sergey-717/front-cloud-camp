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

export const Advantage = ({ newUser, setNewUserState }: any) => {
  return (
    <FlexContainer>
      <InputStep
      // id={`field-advantages-${advantage}`}
      // placeholder="Placeholder"
      // onBlur={(e) => afterFocus(e.target.value)}
      // // onChange={(e) => setAdvantages([...newUser.advantages[index] = e.target.value])}
      // value={newUser.advantages[index]}
      />

      <DeleteButtonOutlined
      // onClick={() => DeleteAdvantage(advantage)}
      // id={`button-remove-${advantage}`}
      >
        <IconTrash />
      </DeleteButtonOutlined>
    </FlexContainer>
  );
};
