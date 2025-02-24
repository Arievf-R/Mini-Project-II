import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const DetailUser = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const getData = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users/" + id);
    } catch (error) {
      console.log(error);
      setData(res.data.data);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);
  return (
    <div>
      <Navbar />
      <div>
        <img src="data.avatar" alt="img" />
      </div>
    </div>
  );
};
