import CarCard from 'components/CarCard/CarCard';

const CarsGrid = ({ cars }) => {
  return (
    <>
      {cars.map(car => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </>
  );
};

export default CarsGrid;
