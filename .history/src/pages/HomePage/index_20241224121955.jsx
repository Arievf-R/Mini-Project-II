import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-yellow-100 min-h-screen py-8">
        {/* Hero Section */}
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-green-800 retro-font mb-6">
            Welcome to Our People List
          </h1>
          <p className="text-lg text-green-800 mb-6">
            Explore the list of amazing individuals, their profiles, and more!
            You can get to know more about them and their roles in our
            community.
          </p>
          <a
            href="#people"
            className="bg-green-800 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition-all"
          >
            View People List
          </a>
        </div>

        {/* People List Section */}
        <div id="people" className="container mx-auto px-4 lg:px-8 mt-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Our People
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Person 1 */}
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg text-center">
              <i className="ri-user-line text-4xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                John Doe
              </h3>
              <p className="text-green-800 mb-4">Frontend Developer</p>
              <a href="#" className="text-blue-600 hover:underline">
                View Profile
              </a>
            </div>
            {/* Person 2 */}
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg text-center">
              <i className="ri-user-line text-4xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Jane Smith
              </h3>
              <p className="text-green-800 mb-4">Backend Developer</p>
              <a href="#" className="text-blue-600 hover:underline">
                View Profile
              </a>
            </div>
            {/* Person 3 */}
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg text-center">
              <i className="ri-user-line text-4xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Michael Johnson
              </h3>
              <p className="text-green-800 mb-4">UI/UX Designer</p>
              <a href="#" className="text-blue-600 hover:underline">
                View Profile
              </a>
            </div>
            {/* Person 4 */}
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg text-center">
              <i className="ri-user-line text-4xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Sarah Lee
              </h3>
              <p className="text-green-800 mb-4">Project Manager</p>
              <a href="#" className="text-blue-600 hover:underline">
                View Profile
              </a>
            </div>
            {/* Person 5 */}
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg text-center">
              <i className="ri-user-line text-4xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Chris Martin
              </h3>
              <p className="text-green-800 mb-4">Content Strategist</p>
              <a href="#" className="text-blue-600 hover:underline">
                View Profile
              </a>
            </div>
            {/* Person 6 */}
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg text-center">
              <i className="ri-user-line text-4xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Linda Wu
              </h3>
              <p className="text-green-800 mb-4">Marketing Specialist</p>
              <a href="#" className="text-blue-600 hover:underline">
                View Profile
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-yellow-100 py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-8">
              Contact Us
            </h2>
            <p className="text-lg text-green-800 mb-4">
              Have any questions or need assistance? Reach out to us and we'll
              get back to you soon!
            </p>
            <a
              href="mailto:contact@yourdomain.com"
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
