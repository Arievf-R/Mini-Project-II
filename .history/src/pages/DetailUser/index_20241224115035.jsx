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
    import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [data, setData] = useState(null);

  // Simulasi pengambilan data API
  useEffect(() => {
    // Mengambil data dari API (simulasi)
    setTimeout(() => {
      setData({
        data: {
          avatar: 'https://via.placeholder.com/150',
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
        },
        support: {
          text: 'If you need assistance, please refer to our support center.',
          url: 'https://www.example.com/help-center',
        },
      });
    }, 1000); // Simulasi loading data selama 1 detik
  }, []);

  return (
    <div>
      <Navbar />
      {data ? (
        <div className="min-h-screen bg-yellow-100 py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-3xl font-bold text-green-800 retro-font mb-6 text-center">
              Profile
            </h1>
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 text-center shadow-lg">
              <img
                src={data.data.avatar}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-lg font-bold text-green-900">
                {data.data.first_name} {data.data.last_name}
              </p>
              <p className="text-green-800">{data.data.email}</p>
            </div>

            {/* Additional Information Section */}
            <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-green-800">About Me</h2>
              <p className="text-green-800 mb-2">I am a web developer with a passion for coding and learning new technologies. I love working on creative projects and solving challenging problems.</p>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-green-800">Social Media</h2>
              <ul className="text-green-800">
                <li className="mb-2">
                  <a
                    href="https://www.facebook.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://twitter.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Settings Section */}
            <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-green-800">Account Settings</h2>
              <ul className="text-green-800">
                <li className="mb-2">
                  <a
                    href="/update-password"
                    className="text-blue-600 hover:underline"
                  >
                    Change Password
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/update-email"
                    className="text-blue-600 hover:underline"
                  >
                    Update Email
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/privacy-settings"
                    className="text-blue-600 hover:underline"
                  >
                    Privacy Settings
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Info Section */}
            <div className="mt-6 bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold text-green-800">Support Info</h2>
              <p className="text-green-800 mb-2">{data.support.text}</p>
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
        <p className="text-center">Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default ProfilePage;

  );
};
