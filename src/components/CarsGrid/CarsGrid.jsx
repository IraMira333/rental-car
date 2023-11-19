import CarCard from 'components/CarCard/CarCard';

const CarsGrid = ({ cars }) => {
  return (
    <ul>
      {cars.map(car => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarsGrid;
