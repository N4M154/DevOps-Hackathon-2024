import React from 'react';
import { Link } from 'react-router-dom';

const Cars = ({ car }) => {
  return (
    <div className="car-listing">
      <img src={car.image} alt={car.make + ' ' + car.model} />
      <div>
        <h3>{car.make} {car.model}</h3>
        <p>Price: ${car.price}</p>
        <p>Year: {car.year}</p>
        <Link to={'/payment'}>
          <button>Buy Car</button>
        </Link>
      </div>
    </div>
  );
};

export default Cars;
