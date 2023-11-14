import styled from "@emotion/styled";
import { Select } from "@mui/material";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const StyledSelect = styled(Select)`
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : "0"};
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  height: ${(props) => (props.height ? `${props.height}px` : "auto")};
  border: 1px solid #fff;
  background-color: #f7f7fb;
  border-radius: 14px;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #8a8a89;
`;

export const StyledLeftInput = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 14px 0px 0px 14px;
  background: #f7f7fb;
  outline-color: #3470ff;

  &::placeholder {
    font-style: italic;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #121417;
  }
`;

export const StyledRightInput = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 93px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0px 14px 14px 0px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  background: #f7f7fb;
  outline-color: #3470ff;

  &::placeholder {
    font-style: italic;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #121417;
  }
`;

export const StyleInputLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-left: 12px;
  color: #8a8a89;
`;

export const FromToDiv = styled.div`
  display: flex;
  margin-left: 13px;
`;

export const SearchBtn = styled.button`
  display: flex;
  padding: 14px 44px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  margin-left: 18px;

  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;
