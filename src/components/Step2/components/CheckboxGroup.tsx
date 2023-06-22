import React, { useState } from "react";
import {
  BlockContainerSmallGap,
  ColumnContainer,
  FlexContainer,
} from "../../../styles/containers";

const checkboxGroup: number[] = [1, 2, 3];
export const CheckboxGroup = ({ newUser, setNewUserState }: any) => {
  const handleSetCheckboxes = (value: number) => {
    newUser.checkbox.includes(value)
      ? setNewUserState("checkbox", [
          ...newUser.checkbox.filter((el: number) => el !== value),
        ])
      : setNewUserState("checkbox", [...newUser.checkbox, value]);
  };

  return (
    <ColumnContainer>
      <BlockContainerSmallGap>
        <label>Checkbox group</label>
        {checkboxGroup.map((checkbox) => (
          <FlexContainer key={checkbox}>
            <input
              type="checkbox"
              name="checkboxGroup"
              id={`field-checkbox-group-option-${checkbox}`}
              onChange={() => handleSetCheckboxes(checkbox)}
              defaultChecked={newUser.checkbox.includes(checkbox)}
            />
            <label htmlFor={`field-checkbox-group-option-${checkbox}`}>
              {checkbox}
            </label>
          </FlexContainer>
        ))}
      </BlockContainerSmallGap>
    </ColumnContainer>
  );
};
