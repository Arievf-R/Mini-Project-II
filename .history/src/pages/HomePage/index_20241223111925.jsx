import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
export const HomePage = () => {
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
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

      <div className="min-h-screen py-8 bg-yellow-100">
        <div className="container px-4 mx-auto">
          <h1 className="mb-6 text-3xl font-bold text-center text-green-800 retro-font">
            User List
          </h1>
          <Pagination align="center" defaultCurrent={1} total={50} />
          <div className="flex justify-center mb-4">
            <button
              onClick={handleBack}
              disabled={page === 1}
              className="px-4 py-2 text-white bg-green-600 rounded-l-lg disabled:bg-green-800 hover:bg-green-700"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="px-4 py-2 text-white bg-green-600 rounded-r-lg disabled:bg-green-800 hover:bg-green-700"
            >
              Next
            </button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {data.map((user) => (
              <div
                key={user.id}
                className="flex flex-col items-center p-4 text-center bg-yellow-200 border-2 border-yellow-400 rounded-lg shadow-lg"
              >
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-24 h-24 mb-4 border-4 border-green-800 rounded-full"
                />
                <p className="text-lg font-bold text-green-900 retro-font">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-green-800">{user.email}</p>
                <Link to={`/detail/${user.id}`}>
                  <button className="px-4 py-1 mt-2 font-semibold text-yellow-100 transition-colors bg-green-600 rounded-lg shadow-lg hover:bg-green-800 retro-font">
                    Detail User
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
