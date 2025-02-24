import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DetailUser = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users/" + id);
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
      {data ? (
        <div className="min-h-screen py-10 bg-white">
          <div className="container px-6 mx-auto lg:px-12">
            <h1 className="mb-8 text-4xl font-bold text-center text-black">
              User Profile
            </h1>

            <div className="p-8 mb-6 text-center bg-white border-2 border-gray-200 rounded-lg shadow-md">
              <img
                src={data.data.avatar}
                alt="User Avatar"
                className="w-32 h-32 mx-auto mb-6 border-4 border-blue-500 rounded-full"
              />
              <p className="mb-2 text-2xl font-bold text-black">
                {data.data.first_name} {data.data.last_name}
              </p>
              <p className="text-lg text-gray-500">{data.data.email}</p>
            </div>

            <div className="p-6 mb-6 bg-white border-2 border-gray-200 rounded-lg shadow-md">
              <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-black">
                <i className="text-xl text-black fas fa-user"></i> About Me
              </h2>
              <p className="text-gray-500">
                I am a passionate web developer with a focus on creating
                seamless and user-friendly websites. I enjoy working on both
                front-end and back-end technologies.
              </p>
            </div>

            <div className="p-6 bg-white border-2 border-gray-200 rounded-lg shadow-md">
              <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-black">
                <i className="text-xl text-black fas fa-shield-alt"></i> Support
                Info
              </h2>
              <p className="mb-4 text-gray-500">
                If you need assistance, please check out our support center for
                help.
              </p>
              <a
                href={data.support.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-green-800">Loading...</p>
      )}
      <Footer />
    </div>
  );
};
