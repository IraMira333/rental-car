import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'redux/operations';
import { selectCars, selectIsLastPage, selectIsLoading } from 'redux/selectors';
import CarsGrid from 'components/CarsGrid/CarsGrid';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const carsInfo = useSelector(selectCars);
  // console.log(carsInfo);
  // const cars = carsInfo.cars;
  const [params, setParams] = useState({ page: 1 });

  const isLastPage = useSelector(selectIsLastPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCars({ ...params }));
  }, [dispatch, params]);

  console.log(carsInfo);
  const onLoadMore = () => setParams({ ...params, page: params.page + 1 });

  const isNeedLoadMoreButton = !isLastPage && !isLoading && carsInfo.length > 0;

  return (
    <>
      <CarsGrid cars={carsInfo} />
      {isNeedLoadMoreButton && <LoadMoreButton onClick={onLoadMore} />}
    </>
  );
}
