//@ts-nocheck
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
import { IconTrash } from "./icons/IconTrash";
import { PlusIcon } from "./icons/PlusIcon";
import { v4 as uuid } from "uuid";

export const Advantages = ({ newUser, setNewUserState }: any) => {
  const [advantages, setAdvantages] = useState(
    !!newUser.advantages.length
      ? {
          ...newUser.advantages.reduce((acc, x, i) => {
            acc[uuid()] = { value: x };
            return acc;
          }, {}),
        }
      : {
          [uuid()]: { value: "" },
          [uuid()]: { value: "" },
          [uuid()]: { value: "" },
        }
  );

  const DeleteAdvantage = (advantage: string) => {
    delete advantages[advantage];
    setNewUserState("advantages", [
      ...Object.values(advantages).map((x) => x.value),
    ]);
  };
  const oneAdvantageMore = () => {
    setAdvantages({ ...advantages, [uuid()]: { value: "" } });
  };

  const setAdvantageValue = (el: object, value: string) => {
    advantages[el].value = value;
    setAdvantages({ ...advantages });
  };
  const handleSetAdvantagesState = () => {
    setNewUserState("advantages", [
      ...Object.values(advantages).map(({ value }) => value),
    ]);
  };
  return (
    <ColumnContainer>
      <BlockContainerMiddleGap>
        <label>Advantages</label>
        {Object.keys(advantages).map((advantage: any, index: number) => (
          <FlexContainer key={advantage}>
            <InputStep
              id={`field-advantages-${index + 1}`}
              placeholder="Placeholder"
              onBlur={() => handleSetAdvantagesState()}
              onChange={(e) => setAdvantageValue(advantage, e.target.value)}
              value={advantages[advantage].value}
            />

            <DeleteButtonOutlined
              onClick={() => DeleteAdvantage(advantage)}
              id={`button-remove-${advantage}`}
            >
              <IconTrash />
            </DeleteButtonOutlined>
          </FlexContainer>
        ))}

        <PlusButtonOutlined onClick={oneAdvantageMore} id="button-add">
          <PlusIcon color="#5558fa" />
        </PlusButtonOutlined>
      </BlockContainerMiddleGap>
    </ColumnContainer>
  );
};
