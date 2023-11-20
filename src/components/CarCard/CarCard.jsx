import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCar, deleteFavoriteCar } from 'redux/carSlice';
import { selectFavoriteCars } from 'redux/selectors';

import {
  CarDescription,
  CarImage,
  CarImgBox,
  CarPrice,
  CardBox,
  CardModel,
  CardTitle,
} from './CarCard.styled';
import HeartButton from './HeartButton/HeartButton';

const CarCard = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const cityCountry = address.split(', ').slice(-2);

  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const isFavorite = favoriteCars.find(favorCar => favorCar.id === car.id);

  const onSwitchFavorite = () => {
    console.log(deleteFavoriteCar);
    if (!isFavorite) dispatch(addFavoriteCar(car));
    if (isFavorite) dispatch(deleteFavoriteCar(car));
  };

  return (
    <>
      <CardBox>
        <CarImgBox>
          <CarImage src={img} alt={` ${model}`} loading="lazy" />
          <HeartButton $isFavorite={isFavorite} onClick={onSwitchFavorite} />
        </CarImgBox>
        <CardTitle>
          <CardModel>
            {make} <span>{model}</span>, {year}
          </CardModel>
          <CarPrice>{rentalPrice}</CarPrice>
        </CardTitle>
        <CarDescription>
          {cityCountry[0]} <span>|</span> {cityCountry[1]} <span>|</span>{' '}
          {rentalCompany} <span>|</span> {make} <span>|</span> {model}{' '}
          <span>|</span> {type} <span>|</span> {id} <span>|</span>{' '}
          {accessories[0]}
        </CarDescription>
      </CardBox>
    </>
  );
};

export default CarCard;
