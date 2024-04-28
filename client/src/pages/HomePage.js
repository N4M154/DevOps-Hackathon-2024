import React, { useState } from 'react';
import Cars from "../components/Cars";
import Layout from "../components/Layout/Layout";
import "../App.css"
const Homepage = () => {
  const initialCars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2020,
      price: 25000,
      image:
        "https://www.motortrend.com/uploads/sites/10/2019/11/2020-toyota-camry-se-auto-sedan-angular-front.png?w=762",
    },
    {
      id: 2,
      make: "Honda",
      model: "Accord",
      year: 2019,
      price: 22000,
      image:
        "https://cars.usnews.com/static/images/Auto/izmo/i103961692/2019_honda_accord_angularfront.jpg",
    },
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      year: 2021,
      price: 35000,
      image:
        "https://cars.usnews.com/static/images/Auto/izmo/i159614450/2021_ford_mustang_angularfront.jpg",
    },
    {
      id: 4,
      make: "Chevrolet",
      model: "Camaro",
      year: 2020,
      price: 30000,
      image:
        "https://cars.usnews.com/static/images/Auto/izmo/i159614128/2020_chevrolet_camaro_angularfront.jpg",
    },
    {
      id: 5,
      make: "BMW",
      model: "X5",
      year: 2018,
      price: 40000,
      image:
        "https://cars.usnews.com/static/images/Auto/izmo/i58029935/2018_bmw_x5_angularfront.jpg",
    },
    {
      id: 6,
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2019,
      price: 38000,
      image:
        "https://cars.usnews.com/static/images/Auto/izmo/i100899632/2019_mercedes_benz_c_class_angularfront.jpg",
    },
    {
      id: 7,
      make: "Audi",
      model: "A4",
      year: 2020,
      price: 36000,
      image:
        "https://cars.usnews.com/static/images/Auto/izmo/i159614025/2020_audi_a4_sedan_angularfront.jpg",
    },
    {
      id: 8,
      make: "Porsche",
      model: "Cayman",
      year: 2021,
      price: 52000,
      image:
        "https://cars.usnews.com/static/images/Auto/izmo/i159614791/2021_porsche_718_cayman_angularfront.jpg",
    },
  ];

  const [cars, setCars] = useState(initialCars);
  const [sortOption, setSortOption] = useState('');
  const sortCars = (option) => {
    const sortedCars = [...cars].sort((a, b) => {
      if (option === 'lowest') {
        return a.price - b.price;
      } else if (option === 'highest') {
        return b.price - a.price;
      }
    });

    setCars(sortedCars);
    setSortOption(option);
  };
  const handleSortChange = (event) => {
    sortCars(event.target.value);
  };

  return (
    <Layout>
      <div className="homepage">
        <header className="homepage-header">
          <h1>Welcome to TimTam's Venture</h1>
          <select value={sortOption} onChange={handleSortChange} className="sort-select">
          <option value="">Select Sorting by Price</option>
          <option value="lowest">Sort by Price: Lowest First</option>
          <option value="highest">Sort by Price: Highest First</option>
        </select>
        </header>
        
        

        <div className="car-listings">
          {cars.map(car => (
            <div key={car.id} className="car-item">
              <Cars car={car} />
            </div>
          ))}
        </div>
        
      </div>
    </Layout>
  );
};

export default Homepage;
