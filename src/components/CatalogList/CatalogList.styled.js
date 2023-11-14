import styled from "@emotion/styled";

export const MainCatalogDiv = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 50px;
  padding-bottom: 20px;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  gap: 30px;
`;

export const StyledLi = styled.li`
  gap: 30px;
  height: 426px;
`;

export const CarInfoWrapper = styled.div`
  width: 292px;
  margin-bottom: 28px;
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Paragraph = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;

  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const ParagraphDesc = styled.p`
  color: rgba(18, 20, 23, 0.5);

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  margin-bottom: 24px;

  font-family: Manrope;
  font-size: 14px;
  line-height: 20px;
  color: #121417;

  &:not(:last-child) {
    border-right: none;
  }
`;

export const Img = styled.img`
  width: 274px;
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
  position: absolute;
  bottom: 0;
`;

export const ImgContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const HeartIcon = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  fill: ${(props) => (props.$active ? "#3470ff" : "transparent")};
  stroke: ${(props) => (props.$active ? "#3470ff" : "white")};
`;

export const HighlightedSpan = styled.span`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #3470ff;
`;
export const CardDiv = styled.div`
  width: 274px;
  position: relative;
`;
