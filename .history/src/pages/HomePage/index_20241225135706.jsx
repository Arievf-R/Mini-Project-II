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
      <div id="home" className="min-h-screen py-8 bg-yellow-100 scroll-mt-24">
        <div className="container px-4 mx-auto text-center lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-green-800 retro-font">
            Welcome to People List
          </h1>
          <p className="mb-6 text-lg text-green-800">
            Discover amazing people from different fields, learn about their
            stories, and be inspired by their journey!
          </p>
          <a
            href="#people"
            className="px-6 py-3 text-lg text-white transition-all bg-green-800 rounded-full hover:bg-green-700 "
          >
            Explore People
          </a>
        </div>
        <div className="container px-4 mx-auto mt-16 lg:px-8">
          <h2 className="mb-8 text-3xl font-semibold text-center text-green-800">
            Why People List?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 text-center bg-yellow-200 border-2 border-yellow-400 rounded-lg shadow-lg">
              <i className="mb-4 text-4xl text-green-800 ri-eye-line"></i>
              <h3 className="mb-2 text-xl font-semibold text-green-900">
                Discover New Faces
              </h3>
              <p className="mb-4 text-green-800">
                Browse through a curated list of talented individuals from
                various industries and professions.
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-200 border-2 border-yellow-400 rounded-lg shadow-lg">
              <i className="mb-4 text-4xl text-green-800 ri-file-user-line"></i>
              <h3 className="mb-2 text-xl font-semibold text-green-900">
                Detailed Profiles
              </h3>
              <p className="mb-4 text-green-800">
                Read about their journeys, achievements, and the challenges
                they've overcome to succeed.
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-200 border-2 border-yellow-400 rounded-lg shadow-lg">
              <i className="mb-4 text-4xl text-green-800 ri-article-line"></i>
              <h3 className="mb-2 text-xl font-semibold text-green-900">
                Get Inspired
              </h3>
              <p className="mb-4 text-green-800">
                Learn from the stories of inspiring people who can help you take
                the next step in your career or personal growth.
              </p>
            </div>
          </div>
        </div>
        <div
          id="people"
          className="container px-4 mx-auto mt-16 lg:px-8 scroll-mt-16"
        >
          <h2 className="mb-8 text-3xl font-semibold text-center text-green-800">
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
                  <button className="px-4 py-1 mt-2 font-semibold text-yellow-100 transition-colors bg-green-600 rounded-lg shadow-lg hover:bg-green-800 retro-font">
                    Detail Profil
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div id="about" className="container px-4 mx-auto mt-16 lg:px-8">
          <h2 className="mb-8 text-3xl font-semibold text-center text-green-800">
            About Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg text-green-800">
                People List is a platform dedicated to connecting people with
                inspiring individuals from various fields. Our goal is to
                provide a space where you can learn about their achievements,
                journeys, and life lessons.
              </p>
              <p className="text-lg text-green-800">
                Whether you're looking to find role models, explore new career
                paths, or simply get motivated, People List is here to inspire
                and guide you. Together, let's celebrate success and build
                connections that matter.
              </p>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/1490129257/photo/man-business-chair-sitting-waiting-businessman-candidate-recruitment-office-businesswoman.jpg?s=612x612&w=0&k=20&c=W-nKFdRK0StGkDOETlcDqMEgbKVx0kiEBuyz8hpmh3E="
                alt="About Us"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div id="contact" className="py-16 bg-yellow-100">
          <div className="container px-4 mx-auto lg:px-8">
            <h2 className="mb-8 text-3xl font-semibold text-center text-green-800">
              Contact Us
            </h2>
            <p className="mb-6 text-lg text-center text-green-800">
              Have any questions or want to know more about the people on our
              platform? Reach out to us, and we'll be happy to help!
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-center text-green-800 ">
                Send Us a Message Directly
              </h3>
              <form className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 mt-4 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="block px-6 py-3 mx-auto mt-4 text-lg text-white bg-green-800 rounded-lg shadow-lg hover:bg-green-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
