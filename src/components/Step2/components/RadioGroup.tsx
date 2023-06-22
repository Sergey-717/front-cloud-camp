import React from "react";
import {
  BlockContainerSmallGap,
  ColumnContainer,
  FlexContainer,
} from "../../../styles/containers";

const radioGroup = [1, 2, 3];
export const RadioGroup = ({ newUser, setNewUserState }: any) => {
  return (
    <ColumnContainer>
      <BlockContainerSmallGap>
        <label>Radio group</label>
        {radioGroup.map((radio) => (
          <FlexContainer key={radio}>
            <input
              type="radio"
              id={`field-radio-group-option-${radio}`}
              name="radioGroup"
              onChange={() => setNewUserState("radio", radio)}
              defaultChecked={newUser.radio === radio}
            />
            <label htmlFor={`field-radio-group-option-${radio}`}>{radio}</label>
          </FlexContainer>
        ))}
      </BlockContainerSmallGap>
    </ColumnContainer>
  );
};
