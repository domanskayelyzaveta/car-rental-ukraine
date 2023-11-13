import styled from "@emotion/styled";

export const ModalWindow = styled.div`
  position: fixed;
  width: 541px;
  height: 790px;
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding-top: 40px;
  padding-left: 33px;
  padding-right: 40px;
  border: 1px solid #ccc;
  z-index: 10000;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 900;
`;

export const ImgModal = styled.img`
  object-fit: cover;
  width: 469px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const ImgModalDiv = styled.div`
  position: relative;
  display: inline-block;
`;

export const BtnRentalCar = styled.button`
  // font-family: sans-serif;
  padding: 12px 50px;
  width: 168px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  color: #fff;
  background: #3470ff;
`;

export const BtnCross = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 10px;
  background: transparent;
  border: none;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  margin-top: -35px;
`;

export const CarInfoModalWrapper = styled.div`
  margin-bottom: 28px;
  gap: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const AccessoriesP = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const AccessoriesDiv = styled.div`
  width: 340px;
  margin-bottom: 24px;
`;

export const FunctionalitySpan = styled.span`
  color: rgba(18, 20, 23, 0.5);
  // font-family: sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 6px;
  // border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const LiCondition = styled.li`
  padding: 7px 14px;
  gap: 8px;
  border-radius: 35px;

  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
  color: #363535;
  background: #f9f9f9;

  span {
    color: #3470ff !important;
  }
`;

export const ConditionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding-left: 0px;
  margin-bottom: 8px;
`;

export const PriceAndMileage = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const BlueSpan = styled.span`
  color: #3470ff;
`;

export const MainInfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 360px;
  margin-bottom: 14px;
`;

export const ParagraphModal = styled.p`
  color: rgba(18, 20, 23, 0.5);
  // font-family: sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-right: 4px;
  // padding-left: 4px;

  &::before {
    content: "\u00a0";
  }

  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;
export const RentalParagraph = styled.p`
  margin-bottom: 14px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const ConditionsList = styled.ul`
  padding-left: 0px;
`;
