import styled from "@emotion/styled";

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: 10px;
`;

export const StyledLi = styled.li`
  flex: 1 0 calc(25% - 29px);
`;

export const CarInfoWrapper = styled.div`
  width: 284px;
  margin-bottom: 28px;
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Paragraph = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const Img = styled.img`
  width: 280px;
  height: 268px;
  border-radius: 14px;
  object-fit: fill;
  margin-bottom: 14px;
`;

export const CarMainInfoDiv = styled.div`
  width: 270px;
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
`;

export const LearnMoreButton = styled.button`
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  width: 274px;
  height: 44px;
  border-radius: 12px;
  border: none;
  color: #fff;
  background: #3470ff;
`;
export const LoadMoreButton = styled.button`
  font-family: sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 150px;
  height: 30px;
  border-radius: 12px;
  border: none;
  color: #fff;
  background: #3470ff;
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
