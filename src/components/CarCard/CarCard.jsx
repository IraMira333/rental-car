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
  HeartButton,
  IconFavoriteHeart,
  IconHeart,
} from './CarCard.styled';

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
    console.log(isFavorite);
    if (!isFavorite) dispatch(addFavoriteCar(car));
    if (isFavorite) dispatch(deleteFavoriteCar(car));
  };

  return (
    <>
      <CardBox>
        <CarImgBox>
          <CarImage src={img} alt={` ${model}`} loading="lazy" />
          <HeartButton onClick={onSwitchFavorite}>
            {isFavorite ? (
              <IconHeart width={18} height={18} />
            ) : (
              <IconFavoriteHeart width={18} height={18} />
            )}
          </HeartButton>
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
