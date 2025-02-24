import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../../assets/lego1.png";
import logo1 from "../../assets/konten1.png";
import logo2 from "../../assets/konten2.png";
import logo3 from "../../assets/konten3.png";
import logo4 from "../../assets/konten4.png";
import logo5 from "../../assets/konten5.png";
import logo6 from "../../assets/konten6.png";
import logo7 from "../../assets/kontenn.png";
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
      <div>
        <main className="flex flex-col items-center mt-20 text-center lg:flex-row lg:text-left lg:justify-between lg:items-center lg:px-20">
          <div className="lg:w-1/2">
            <h1 className="mb-4 text-5xl font-bold">Virtual Healthcare</h1>
            <p className="mb-8 text-lg">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <button className="px-6 py-3 text-lg bg-blue-400 rounded-full">
              Try Whitepace free
            </button>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <img
              src={logo}
              alt="Illustration of people collaborating on a project management software"
            />
          </div>
        </main>

        <div
          id="about"
          class="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 md:p-12"
        >
          <div class="w-full md:w-1/2 flex justify-center">
            <img
              src={logo7}
              alt="Illustration of healthcare providers and medical equipment"
              class="max-w-full h-auto"
            />
          </div>
          <div class="w-full md:w-1/2 mt-6 md:mt-0 md:ml-12 text-center md:text-left">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900">
              Leading healthcare providers
            </h1>
            <hr class="w-12 border-t-2 border-gray-300 my-4 mx-auto md:mx-0" />
            <p class="text-gray-600 text-lg md:text-xl">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            <button class="mt-6 px-6 py-3 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
              Learn more
            </button>
          </div>
        </div>

        <div
          id="user"
          className="container px-4 mx-auto mt-16 lg:px-8 scroll-mt-16"
        >
          <h2 className="mb-8 text-3xl font-semibold text-center text-black">
            Our Featured User
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {data.map((user) => (
              <div
                key={user.id}
                className="flex flex-col items-center p-4 text-center bg-white border-2 border-gray-200 rounded-lg shadow-lg"
              >
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className="w-24 h-24 mb-4 border-4 border-blue-500 rounded-full"
                />
                <p className="text-lg font-bold text-black">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-gray-500">{user.email}</p>
                <a href={`/detail/${user.id}`}>
                  <button className="px-4 py-1 mt-2 font-semibold text-white transition-colors bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600">
                    Detail Profile
                  </button>
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleBack}
              disabled={page === 1}
              className="px-4 py-2 text-white bg-blue-500 rounded-l-lg disabled:bg-blue-300 hover:bg-blue-600"
            >
              1
            </button>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="px-4 py-2 text-white bg-blue-500 rounded-r-lg disabled:bg-blue-300 hover:bg-blue-600"
            >
              2
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center px-4 py-16 md:px-8 lg:px-16">
          <h1 className="mb-4 text-3xl font-semibold">Our services</h1>
          <p className="max-w-2xl mb-12 text-center text-gray-600">
            We provide to you the best choices for you. Adjust it to your health
            needs and make sure you undergo treatment with our highly qualified
            doctors you can consult with us which type of service is suitable
            for your health
          </p>
          <div
            id="our-services"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <img
                src={logo1}
                alt="Search doctor icon"
                className="mx-auto mb-4"
              />
              <h2 className="mb-2 text-xl font-semibold">Search doctor</h2>
              <p className="text-gray-600">
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <img
                src={logo2}
                alt="Online pharmacy icon"
                className="mx-auto mb-4"
              />
              <h2 className="mb-2 text-xl font-semibold">Online pharmacy</h2>
              <p className="text-gray-600">
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <img
                src={logo3}
                alt="Consultation icon"
                className="mx-auto mb-4"
              />
              <h2 className="mb-2 text-xl font-semibold">Consultation</h2>
              <p className="text-gray-600">
                Free consultation with our trusted doctors and get the best
                recommendations
              </p>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <img
                src={logo4}
                alt="Details info icon"
                className="mx-auto mb-4"
              />
              <h2 className="mb-2 text-xl font-semibold">Details info</h2>
              <p className="text-gray-600">
                Free consultation with our trusted doctors and get the best
                recommendations
              </p>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <img
                src={logo5}
                alt="Emergency care icon"
                className="mx-auto mb-4"
              />
              <h2 className="mb-2 text-xl font-semibold">Emergency care</h2>
              <p className="text-gray-600">
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </div>
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <img src={logo6} alt="Tracking icon" className="mx-auto mb-4" />
              <h2 className="mb-2 text-xl font-semibold">Tracking</h2>
              <p className="text-gray-600">
                Track and save your medical history and health data
              </p>
            </div>
          </div>
          <button className="px-6 py-2 mt-12 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600">
            Learn more
          </button>
        </div>
        <div id="contact" className="py-16 bg-white scroll-mt-24">
          <div className="container px-4 mx-auto lg:px-8">
            <h2 className="mb-8 text-3xl font-semibold text-center text-black">
              Contact Us
            </h2>
            <p className="mb-6 text-lg text-center text-gray-500">
              Have any questions or want to know more about the people on our
              platform? Reach out to us, and we'll be happy to help!
            </p>

            <div>
              <div className="p-6 text-center bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                <h3 className="mb-6 text-2xl font-semibold text-center text-black">
                  Send Us a Message Directly
                </h3>

                <form className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 mt-4 border-2 border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="block px-6 py-3 mx-auto mt-4 text-lg text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
