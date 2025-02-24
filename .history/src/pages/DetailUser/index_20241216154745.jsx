import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const DetailUser = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const getData = async () => {
    try {
      const res = await axios.get("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
    </div>
  );
};
