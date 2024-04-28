import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const { carData } = location.state || {};

  if (!carData) {
    return <div>No car data found</div>;
  }

  return (
    <div className="car-details">
      <img src={carData.image} alt={carData.make + ' ' + carData.model} />
      <div>
        <h2>{carData.make} {carData.model}</h2>
        <p>Price: ${carData.price}</p>
        <p>Year: {carData.year}</p>
      </div>
    </div>
  );
};

export default Profile;
