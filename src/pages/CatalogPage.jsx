import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'redux/operations';
import { selectCars } from 'redux/selectors';
import CarsGrid from 'components/CarsGrid/CarsGrid';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  // const isLastPage = useSelector(selectIsLastPage);
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <CarsGrid cars={cars} />
    </>
  );
}
