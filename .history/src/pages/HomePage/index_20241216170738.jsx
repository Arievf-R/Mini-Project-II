import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const HomePage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getData = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
      console.log(res.data.data);
      setData(res.data.data);
      setTotalPages(res.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNext = () => {
    setPage((page += 1));
  };
  const handleBack = () => {
    setPage(page - +1);
  };
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <Navbar />

      <div className="bg-yellow-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-800 retro-font mb-6 text-center">
            User List
          </h1>
          <div className="flex justify-center mb-4">
            <button
              onClick={handleBack}
              disabled={page === 1}
              className="px-4 py-2 bg-green-600 disabled:bg-green-800 text-white rounded-l-lg hover:bg-green-700"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="px-4 py-2 bg-green-600 disabled:bg-green-800 text-white rounded-r-lg hover:bg-green-700"
            >
              Next
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                <Link to={`/detail/${user.id}`}>
                  <button className=" mt-2 px-4 py-1 font-semibold text-yellow-100 transition-colors bg-green-600 rounded-lg hover:bg-green-800 retro-font shadow-lg">
                    Detail User
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
