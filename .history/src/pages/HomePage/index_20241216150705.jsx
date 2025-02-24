import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
export const HomePage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=2`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <h1>ini Home</h1>
    </div>
  );
};
