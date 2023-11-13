import { useDispatch, useSelector } from "react-redux";

import {
  selectAllCars,
  selectCarsData,
  selectFavorites,
  selectOpenModal,
  selectSelectedCar,
  selectedMileageFrom,
  selectedMileageTo,
  selectedPrice,
  selectsFilteredMake,
} from "../../Redux/selectors";
import plug from "../../images/plug2.jpg";
import {
  CarInfoWrapper,
  CarMainInfoDiv,
  CardDiv,
  HeartIcon,
  HighlightedSpan,
  Img,
  ImgContainer,
  LearnMoreButton,
  MainCatalogDiv,
  Paragraph,
  StyledLi,
  StyledUl,
} from "./CatalogList.styled";
import ButtonLoadMore from "../ButtonLoadMore/ButtonLoadMore";
import Modal from "../Modal/Modal";
import { setOpenModal, setSelectedCar } from "../../Redux/carReducer";
import { removeFromFavorites, setFavorites } from "../../Redux/favoriteReducer";
import { useState } from "react";
import { ToastContainer, toast as Toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CatalogList = () => {
  const [activeState, setActiveState] = useState(null);
  const dispatch = useDispatch();

  const carsData = useSelector(selectCarsData);
  const selectedCar = useSelector(selectSelectedCar);
  const isModalOpen = useSelector(selectOpenModal);
  const favorites = useSelector(selectFavorites);
  const allCars = useSelector(selectAllCars);
  const carsPrice = useSelector(selectedPrice);
  const mileageFrom = useSelector(selectedMileageFrom);
  const mileageTo = useSelector(selectedMileageTo);
  const filterValue = useSelector(selectsFilteredMake);

  const toggleFavoritesHandler = (car, index) => {
    if (favorites.some((favCar) => favCar.id === car.id)) {
      dispatch(removeFromFavorites(car));
      setActiveState(-1);
    } else {
      dispatch(setFavorites(car));
      setActiveState(index);
    }
  };

  const getFilteredCars = () => {
    let newFilteredCars = [...allCars];

    switch (true) {
      case !!filterValue:
        newFilteredCars = newFilteredCars.filter((car) =>
          car.make.toLowerCase().includes(filterValue.toLowerCase().trim())
        );
        break;
      case !!carsPrice:
        newFilteredCars = newFilteredCars.filter(
          (car) => parseFloat(car.rentalPrice.replace("$", "")) <= carsPrice
        );
        break;
      case !!mileageFrom:
        newFilteredCars = newFilteredCars.filter(
          (car) =>
            Number(car.mileage) >= mileageFrom &&
            Number(car.mileage) <= mileageTo
        );
        break;
      default:
    }

    if (newFilteredCars.length === 0) {
      Toast.warning("There is no result", {
        position: "top-center",
        autoClose: 3000,
      });
    }

    return newFilteredCars;
  };

  const filteredCarsMap = getFilteredCars();

  const isOpen = (car) => {
    dispatch(setSelectedCar(car));
    dispatch(setOpenModal({ isOpen: true, selectedCar: car }));
  };

  const isClosed = () => {
    dispatch(setOpenModal(false));
  };

  return (
    <MainCatalogDiv>
      <ToastContainer />
      <StyledUl>
        {filterValue || carsPrice || mileageFrom || mileageTo
          ? filteredCarsMap.map((car, index) => {
              const isFavorite = favorites.some(
                (favCar) => favCar.id === car.id
              );
              const address = car.address;
              const wordArr = address.split(" ");
              const lastWord = wordArr[wordArr.length - 1];
              const beforeLastWord = wordArr[wordArr.length - 2];

              return (
                <div key={`filtered-car-wrapper-${index}`}>
                  <CardDiv key={`${car.id}-${index}`}>
                    <StyledLi key={`${car.id}-${index}`}>
                      <ImgContainer>
                        <Img src={car.img || plug} alt={car.make} />

                        <HeartIcon
                          $active={isFavorite || activeState === index}
                          onClick={() => toggleFavoritesHandler(car, index)}
                        >
                          <path
                            d="M15.63 3.4575C15.247 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2544 2.24863 12.7125 2.24863C12.1707 2.24863 11.6341 2.35539 11.1335 2.56281C10.6329 2.77023 10.1781 3.07425 9.79503 3.4575L9.00003 4.2525L8.20503 3.4575C7.43126 2.68373 6.3818 2.24903 5.28753 2.24903C4.19325 2.24903 3.1438 2.68373 2.37003 3.4575C1.59626 4.23127 1.16156 5.28072 1.16156 6.375C1.16156 7.46927 1.59626 8.51873 2.37003 9.2925L3.16503 10.0875L9.00003 15.9225L14.835 10.0875L15.63 9.2925C16.0133 8.90943 16.3173 8.45461 16.5247 7.95401C16.7321 7.45342 16.8389 6.91686 16.8389 6.375C16.8389 5.83313 16.7321 5.29657 16.5247 4.79598C16.3173 4.29539 16.0133 3.84056 15.63 3.4575Z"
                            stroke="white"
                            strokeOpacity="0.8"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </HeartIcon>
                      </ImgContainer>
                      <CarMainInfoDiv>
                        <p>
                          {car.make}{" "}
                          <HighlightedSpan>{car.model}</HighlightedSpan>,{" "}
                          {car.year}
                        </p>
                        <p>{car.rentalPrice}</p>
                      </CarMainInfoDiv>
                      <CarInfoWrapper>
                        <Paragraph>{beforeLastWord}</Paragraph>
                        <Paragraph>{lastWord}</Paragraph>
                        <Paragraph>{car.rentalCompany}</Paragraph>
                        <Paragraph>{car.type}</Paragraph>
                        <Paragraph>{car.make}</Paragraph>
                        <Paragraph>{car.mileage}</Paragraph>
                        <Paragraph>{car.accessories[0]}</Paragraph>
                      </CarInfoWrapper>

                      <LearnMoreButton onClick={() => isOpen(car)}>
                        Learn more
                      </LearnMoreButton>
                    </StyledLi>
                  </CardDiv>
                </div>
              );
            })
          : carsData.map((car, index) => {
              const address = car.address;
              const wordArr = address.split(" ");
              const lastWord = wordArr[wordArr.length - 1];
              const beforeLastWord = wordArr[wordArr.length - 2];
              const isFavorite = favorites.some(
                (favCar) => favCar.id === car.id
              );
              return (
                <CardDiv key={`${car.id}-${index}`}>
                  <StyledLi key={`${car.id}-${index}`}>
                    <ImgContainer>
                      <Img src={car.img || plug} alt={car.make} />

                      <HeartIcon
                        $active={isFavorite || activeState === index}
                        onClick={() => toggleFavoritesHandler(car, index)}
                      >
                        <path
                          d="M15.63 3.4575C15.247 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2544 2.24863 12.7125 2.24863C12.1707 2.24863 11.6341 2.35539 11.1335 2.56281C10.6329 2.77023 10.1781 3.07425 9.79503 3.4575L9.00003 4.2525L8.20503 3.4575C7.43126 2.68373 6.3818 2.24903 5.28753 2.24903C4.19325 2.24903 3.1438 2.68373 2.37003 3.4575C1.59626 4.23127 1.16156 5.28072 1.16156 6.375C1.16156 7.46927 1.59626 8.51873 2.37003 9.2925L3.16503 10.0875L9.00003 15.9225L14.835 10.0875L15.63 9.2925C16.0133 8.90943 16.3173 8.45461 16.5247 7.95401C16.7321 7.45342 16.8389 6.91686 16.8389 6.375C16.8389 5.83313 16.7321 5.29657 16.5247 4.79598C16.3173 4.29539 16.0133 3.84056 15.63 3.4575Z"
                          stroke="white"
                          strokeOpacity="0.8"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </HeartIcon>
                    </ImgContainer>
                    <CarMainInfoDiv>
                      <p>
                        {car.make}{" "}
                        <HighlightedSpan>{car.model}</HighlightedSpan>,{" "}
                        {car.year}
                      </p>
                      <p>{car.rentalPrice}</p>
                    </CarMainInfoDiv>
                    <CarInfoWrapper>
                      <Paragraph>{beforeLastWord}</Paragraph>
                      <Paragraph>{lastWord}</Paragraph>
                      <Paragraph>{car.rentalCompany}</Paragraph>
                      <Paragraph>{car.type}</Paragraph>
                      <Paragraph>{car.make}</Paragraph>
                      <Paragraph>{car.mileage}</Paragraph>
                      <Paragraph>{car.accessories[0]}</Paragraph>
                    </CarInfoWrapper>

                    <LearnMoreButton onClick={() => isOpen(car)}>
                      Learn more
                    </LearnMoreButton>
                  </StyledLi>
                </CardDiv>
              );
            })}
      </StyledUl>
      <ButtonLoadMore />
      {isModalOpen && <Modal isClosed={isClosed} selectedCar={selectedCar} />}
    </MainCatalogDiv>
  );
};
export default CatalogList;
