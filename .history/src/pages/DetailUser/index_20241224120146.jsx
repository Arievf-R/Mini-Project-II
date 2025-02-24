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
        <div className="min-h-screen bg-yellow-50 py-10">
          <div className="container mx-auto px-6 lg:px-12">
            <h1 className="text-4xl font-bold text-green-800 mb-8 text-center retro-font">
              User Profile
            </h1>

            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-8 text-center shadow-md mb-6">
              <img
                src={data.data.avatar}
                alt="User Avatar"
                className="w-32 h-32 rounded-full mx-auto mb-6"
              />
              <p className="text-2xl font-bold text-green-900 mb-2">
                {data.data.first_name} {data.data.last_name}
              </p>
              <p className="text-green-700 text-lg">{data.data.email}</p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 shadow-md mb-6">
              <h2 className="text-2xl font-semibold text-green-800 flex items-center gap-2 mb-4">
                <i className="ri-user-3-line text-xl text-green-800"></i> About
                Me
              </h2>
              <p className="text-green-700">
                I am a passionate web developer with a focus on creating
                seamless and user-friendly websites. I enjoy working on both
                front-end and back-end technologies.
              </p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 shadow-md mb-6">
              <h2 className="text-2xl font-semibold text-green-800 flex items-center gap-2 mb-4">
                <i className="ri-social-media-line text-xl text-green-800"></i>{" "}
                Social Media
              </h2>

              <ul className="space-y-4 text-green-700">
                <li>
                  <a
                    href="https://www.facebook.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline flex items-center gap-2"
                  >
                    <i className="ri-facebook-line text-xl"></i> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline flex items-center gap-2"
                  >
                    <i className="ri-twitter-line text-xl"></i> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline flex items-center gap-2"
                  >
                    <i className="ri-instagram-line text-xl"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 shadow-md mb-6">
              <h2 className="text-2xl font-semibold text-green-800 flex items-center gap-2 mb-4">
                <i className="ri-settings-2-line text-xl text-green-800"></i>{" "}
                Account Settings
              </h2>
              <ul className="space-y-4 text-green-700">
                <li>
                  <a
                    href="/update-password"
                    className="text-green-700 hover:underline flex items-center gap-2"
                  >
                    <i className="ri-lock-line text-xl"></i> Change Password
                  </a>
                </li>
                <li>
                  <a
                    href="/update-email"
                    className="text-green-700 hover:underline flex items-center gap-2"
                  >
                    <i className="ri-mail-line text-xl"></i> Update Email
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-settings"
                    className="text-green-700 hover:underline flex items-center gap-2"
                  >
                    <i className="ri-user-settings-line text-xl"></i> Privacy
                    Settings
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-green-800 flex items-center gap-2 mb-4">
                <i className="ri-shield-line text-xl text-green-800"></i>{" "}
                Support Info
              </h2>
              <p className="text-green-700 mb-4">
                If you need assistance, please check out our support center for
                help.
              </p>
              <a
                href={data.support.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
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
