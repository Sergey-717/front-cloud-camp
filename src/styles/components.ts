import styled from "styled-components";

export const InputMain = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  gap: 12px;
  width: 400px;
  height: 44px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.16);
  align-self: stretch;
  flex-grow: 0;
`;

export const InputStep = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  gap: 12px;
  width: 300px;
  height: 44px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;
export const InputAbout = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 12px 12px 0px;
  gap: 12px;
  width: 680px;
  height: 84px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  z-index: 1;
`;

export const ButtonContained = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  width: 79px;
  height: 44px;
  left: 24px;
  top: 369px;
  background: #5558fa;
  border-radius: 4px;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1.5px solid #5558fa;
    color: black;
    background-color: #efefef;
  }
`;

export const ButtonOutlined = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  width: 73px;
  height: 44px;
  left: 110px;
  top: 697px;
  border: 1.5px solid #5558fa;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #5558fa;
    color: #ffffff;
  }
`;
export const PlusButtonOutlined = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 44px;
  height: 44px;
  border: 1.5px solid #5558fa;
  border-radius: 4px;
  order: 3;
  flex-grow: 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    svg:nth-child() {
    }
  }
`;
export const DeleteButtonOutlined = styled(PlusButtonOutlined)`
  cursor: pointer;
  border: none;
  background-color: white;
  &:hover {
    border: 1.5px solid #5558fa;
  }
`;

export const Selector = styled.select`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  gap: 12px;
  width: 300px;
  height: 44px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`;
