import styled from "styled-components";

export const AppContainer = styled.div`
  @media (max-width: 1024px) {
    /* background-color: wheat; */
    align-items: baseline;
  }
  min-width: 100vw;
  background-color: lightgrey;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const ContentContainer = styled.form`
  /* left: calc(50% - 900px / 2); */
  padding: 62px 110px;
  margin: 24px 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  gap: 20px;
  @media (max-width: 1024px) {
    left: 0;
    margin: 20px;
    padding: 12px 20px;
    width: 100%;
  }
`;

export const ColumnContainer = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
export const FlexContainer = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
  width: 100%;
  align-items: flex-start;
  display: flex;
  gap: 20px;
`;

export const FlexContainerForTips = styled(FlexContainer)`
  justify-content: space-between;
  margin-top: -20px;
`;
export const FlexContainerForButtons = styled(FlexContainerForTips)`
  margin-top: 60px;
`;

export const BlockContainerMiddleGap = styled(ColumnContainer)`
  @media (max-width: 1024px) {
    width: 100%;
  }
  gap: 8px;
`;
export const BlockContainerSmallGap = styled(ColumnContainer)`
  gap: 2px;
`;

export const Divider = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  width: 100%;
  height: 0px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;
