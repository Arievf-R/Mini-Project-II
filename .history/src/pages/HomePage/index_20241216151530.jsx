import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
export const HomePage = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=2`);
      console.log(res.data.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        {data.map((user) => (
          <div key={user.id}>
            <img src={user.avatar} alt="img" />
            <p>{user.firstname}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
