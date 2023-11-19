import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCar, deleteFavoriteCar } from 'redux/carSlice';
import { selectFavoriteCars } from 'redux/selectors';

import sprite from '../../assets/sprite.svg';

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

  const parseAddress = address => {
    // eslint-disable-next-line no-unused-vars
    const [_, city, country] = address.split(', ');
    return { city, country };
  };

  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const isFavorite = favoriteCars.find(favorCar => favorCar.id === car.id);

  const isSwitchFavorite = () => {
    if (!isFavorite) dispatch(addFavoriteCar(car));

    if (isFavorite) dispatch(deleteFavoriteCar(car));
  };

  return (
    <>
      <div>
        <img src={img} alt={` ${model}`} loading="lazy" />
      </div>
      <div>
        <input
          type="checkbox"
          id={id}
          checked={isFavorite}
          onChange={isSwitchFavorite}
        />
        <svg width={18} height={18}>
          <use href={sprite + '#like'}></use>
        </svg>
      </div>
      <div>
        <h2>
          {make} <span>{model}</span>, {year}
        </h2>
        <p>{rentalPrice}</p>
        <div>
          {address} | {rentalCompany} | {make} | {model} | {type} | {id} |{' '}
          {accessories[0]}
        </div>
      </div>
    </>
  );
};

export default CarCard;
