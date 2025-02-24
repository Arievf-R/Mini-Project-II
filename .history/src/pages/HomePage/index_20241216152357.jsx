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
      <div className="bg-yellow-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-800 retro-font mb-6 text-center">
            User List
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((user) => (
              <div
                key={user.id}
                className="bg-yellow-200 border-2 border-yellow-400 shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
              >
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-24 h-24 rounded-full border-4 border-green-800 mb-4"
                />
                <p className="text-lg font-bold text-green-900 retro-font">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-green-800">{user.email}</p>
                <button className="w-full px-4 py-2 font-semibold text-yellow-100 transition-colors bg-green-800 rounded-lg hover:bg-green-900 retro-font shadow-lg">
                  Detail User
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
