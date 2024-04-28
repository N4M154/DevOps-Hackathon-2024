// frontend/src/pages/SellCar.js

import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const SellCar = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/sell", {
        name,
        price,
        year,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Sell Car - Ecommer App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">SELL CAR FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Car Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              placeholder="Enter Car Price"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="form-control"
              placeholder="Enter Car Year"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            SELL CAR
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SellCar;
