import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
      <div className="bg-yellow-100 min-h-screen py-8">
        {/* Hero Section */}
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-green-800 retro-font mb-6">
            Welcome to People List
          </h1>
          <p className="text-lg text-green-800 mb-6">
            Discover amazing people from different fields, learn about their
            stories, and be inspired by their journey!
          </p>
          <a
            href="#people"
            className="bg-green-800 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition-all"
          >
            Explore People
          </a>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 lg:px-8 mt-16">
          <h2 className="text-3xl font-semibold text-green-800 text-center mb-8">
            Why People List?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg text-center">
              <i className="ri-eye-line text-4xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Discover New Faces
              </h3>
              <p className="text-green-800 mb-4">
                Browse through a curated list of talented individuals from
                various industries and professions.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg text-center">
              <i className="ri-file-user-line text-4xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Detailed Profiles
              </h3>
              <p className="text-green-800 mb-4">
                Read about their journeys, achievements, and the challenges
                they've overcome to succeed.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg text-center">
              <i className="ri-article-line text-4xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Get Inspired
              </h3>
              <p className="text-green-800 mb-4">
                Learn from the stories of inspiring people who can help you take
                the next step in your career or personal growth.
              </p>
            </div>
          </div>
        </div>

        {/* People List Section */}
        <div id="people" className="container mx-auto px-4 lg:px-8 mt-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Our Featured People
          </h2>
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
                  <button className="px-4 py-1 mt-2 font-semibold text-yellow-100 transition-colors bg-green-600 rounded-lg shadow-lg  hover:bg-green-800 retro-font">
                    Detail User
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-yellow-100 py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-8">
              What People Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 border border-yellow-400 rounded-lg shadow-lg">
                <p className="text-green-800 mb-4">
                  "This website helped me discover so many talented people in
                  the tech industry. It's amazing to learn from their
                  experiences."
                </p>
                <p className="font-bold text-green-900">Alex Turner</p>
                <p className="text-green-700">Software Engineer</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white p-6 border border-yellow-400 rounded-lg shadow-lg">
                <p className="text-green-800 mb-4">
                  "The profiles are not just informative, but they really
                  motivate me to push harder in my own career."
                </p>
                <p className="font-bold text-green-900">Emma Wilson</p>
                <p className="text-green-700">Product Designer</p>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-white p-6 border border-yellow-400 rounded-lg shadow-lg">
                <p className="text-green-800 mb-4">
                  "A great platform to connect with like-minded professionals
                  and gain insights into various industries."
                </p>
                <p className="font-bold text-green-900">Liam Brown</p>
                <p className="text-green-700">Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-yellow-100 py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-8">
              Contact Us
            </h2>
            <p className="text-lg text-green-800 mb-6">
              Have any questions or want to know more about the people on our
              platform? Reach out to us and we'll be happy to help!
            </p>
            <a
              href="mailto:contact@peoplelist.com"
              className="bg-green-800 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition-all"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
