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
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [id]);
  return (
    <div>
      <Navbar />
      <div>
        <img src={data.data.avatar} alt="img" />
        <p>{data.data.first_name}</p>
        <p>{data.data.last_name}</p>
        <p>{data.data.email}</p>
      </div>
    </div>
  );
};
