import CarsGrid from 'components/CarsGrid/CarsGrid';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'redux/operations';
import { selectCars, selectIsLastPage, selectIsLoading } from 'redux/selectors';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);
  const [params, setParams] = useState({ page: 1 });

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <CarsGrid cars={cars} />
    </>
  );
}
