import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  background-color: lightgrey;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const ContentContainer = styled.form`
  padding: 62px 110px;
  margin: 24px 0;
  width: 900px;
  left: calc(50% - 900px / 2);
  background: #ffffff;
  border-radius: 12px 12px 0px 0px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
export const FlexContainer = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 20px;
`;
export const FlexContainerForButtons = styled(FlexContainer)`
  justify-content: space-between;
  margin-top: 60px;
`;

export const BlockContainerMiddleGap = styled(ColumnContainer)`
  gap: 8px;
`;
export const BlockContainerSmallGap = styled(ColumnContainer)`
  gap: 2px;
`;

export const Divider = styled.div`
  width: 852px;
  height: 0px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  flex: none;
  order: 0;
  flex-grow: 1;
`;
