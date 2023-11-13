import React, { useCallback } from "react";
import sprite from "../../images/sprite.svg";
import {
  AccessoriesDiv,
  AccessoriesP,
  Backdrop,
  BlueSpan,
  BtnCross,
  BtnRentalCar,
  ConditionsList,
  ConditionsWrapper,
  FunctionalitySpan,
  ImgModal,
  LiCondition,
  MainInfoDiv,
  ModalContentWrapper,
  ModalWindow,
  ParagraphModal,
  PriceAndMileage,
  RentalParagraph,
} from "./Modal.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectOpenModal } from "../../Redux/selectors";
import { setOpenModal } from "../../Redux/carReducer";

import {
  CarMainInfoDiv,
  ImgContainer,
  ParagraphDesc,
  StyledLi,
} from "../CatalogList/CatalogList.styled";
import plug from "../../images/plug2.jpg";

const Modal = ({ selectedCar, index, beforeLastWord, lastWord }) => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(selectOpenModal);

  const closeModal = useCallback(() => {
    dispatch(setOpenModal(false));
  }, [dispatch]);

  const onEscClose = (e) => {
    if (e.key === "Escape") {
      dispatch(setOpenModal(false));
    }
  };

  document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  document.addEventListener("keydown", onEscClose);

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(setOpenModal(false));
    }
  };

  const handleRentalBtnClick = () => {
    const userConfirmation = window.confirm(
      "Would you like to call the company for an order?"
    );
    if (userConfirmation) {
      window.location.href = "tel:+1230000000";
    }
  };

  const highlightRentalConditions = (text) => {
    const conditionsRegex = /(:\s*\d+)/g;
    const parts = text.split(conditionsRegex);

    const highlightedElements = parts.map((part, index) =>
      conditionsRegex.test(part) ? (
        <span key={index} style={{ color: "#3470ff" }}>
          {part}
        </span>
      ) : (
        part
      )
    );

    return <>{highlightedElements}</>;
  };

  return (
    <Backdrop onClick={handleBackDropClick}>
      <ModalWindow>
        {isModalOpen && selectedCar && (
          <>
            <ModalContentWrapper>
              <StyledLi key={`${selectedCar.id}-${index}`}>
                <ImgContainer>
                  <ImgModal
                    src={selectedCar.img || plug}
                    alt={selectedCar.make}
                  />
                </ImgContainer>
                <CarMainInfoDiv>
                  <p>
                    {selectedCar.make} <BlueSpan> {selectedCar.model}</BlueSpan>
                    , {selectedCar.year}
                  </p>
                </CarMainInfoDiv>

                <MainInfoDiv>
                  <ParagraphModal>
                    {
                      selectedCar.address.split(" ")[
                        selectedCar.address.split(" ").length - 2
                      ]
                    }
                  </ParagraphModal>
                  <ParagraphModal>
                    {
                      selectedCar.address.split(" ")[
                        selectedCar.address.split(" ").length - 1
                      ]
                    }
                  </ParagraphModal>
                  <ParagraphModal>id: {selectedCar.id}</ParagraphModal>
                  <ParagraphModal>Year: {selectedCar.year}</ParagraphModal>
                  <ParagraphModal>Type: {selectedCar.type}</ParagraphModal>
                  <ParagraphModal>
                    Fuel consumption: {selectedCar.fuelConsumption}
                  </ParagraphModal>
                  <ParagraphModal>
                    Engine size: {selectedCar.engineSize}
                  </ParagraphModal>
                </MainInfoDiv>

                <ParagraphDesc>{selectedCar.description}</ParagraphDesc>

                <AccessoriesDiv>
                  <AccessoriesP>Accessories and functionalities:</AccessoriesP>
                  <FunctionalitySpan>
                    {selectedCar.accessories.join(" | ")}
                  </FunctionalitySpan>
                  <FunctionalitySpan>
                    {selectedCar.functionalities.join(" | ")}
                  </FunctionalitySpan>
                </AccessoriesDiv>
                <div>
                  <ConditionsList>
                    <RentalParagraph>Rental conditions:</RentalParagraph>
                    <ConditionsWrapper>
                      {selectedCar.rentalConditions
                        .split("\n")
                        .map((condition, index) => (
                          <LiCondition key={index}>
                            {highlightRentalConditions(condition)}
                          </LiCondition>
                        ))}
                    </ConditionsWrapper>

                    <PriceAndMileage>
                      <LiCondition>
                        Price:
                        <BlueSpan>{selectedCar.rentalPrice}</BlueSpan>
                      </LiCondition>
                      <LiCondition>
                        Mileage: <BlueSpan>{selectedCar.mileage}</BlueSpan>
                      </LiCondition>
                    </PriceAndMileage>
                  </ConditionsList>
                </div>
                <div>
                  <BtnRentalCar onClick={handleRentalBtnClick}>
                    Rental car
                  </BtnRentalCar>
                </div>
              </StyledLi>
            </ModalContentWrapper>
          </>
        )}
        <BtnCross onClick={closeModal}>
          <svg width="18" height="18">
            <use href={`${sprite}#icon-close`} />
          </svg>
        </BtnCross>
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
