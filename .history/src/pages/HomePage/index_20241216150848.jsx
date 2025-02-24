import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
export const HomePage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=2`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <Navbar />
      <h1>ini Home</h1>
    </div>
  );
};
