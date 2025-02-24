import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-yellow-100 min-h-screen py-8">
        {/* Hero Section */}
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-green-800 retro-font mb-6">
            Welcome to Our Website
          </h1>
          <p className="text-lg text-green-800 mb-6">
            We are committed to bringing you the best service and experience
            possible. Explore our site to learn more about what we offer.
          </p>
          <a
            href="#services"
            className="bg-green-800 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition-all"
          >
            Explore Our Services
          </a>
        </div>

        {/* Services Section */}
        <div id="services" className="container mx-auto px-4 lg:px-8 mt-16">
          <h2 className="text-3xl font-semibold text-green-800 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg">
              <i className="ri-desktop-line text-3xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Web Development
              </h3>
              <p className="text-green-800">
                We build responsive and user-friendly websites tailored to your
                needs.
              </p>
            </div>
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg">
              <i className="ri-printer-line text-3xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Printing Services
              </h3>
              <p className="text-green-800">
                Offering top-quality printing for your business or personal
                needs.
              </p>
            </div>
            <div className="bg-yellow-200 border-2 border-yellow-400 rounded-lg p-6 shadow-lg">
              <i className="ri-customer-service-2-line text-3xl text-green-800 mb-4"></i>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Customer Support
              </h3>
              <p className="text-green-800">
                Our team is ready to help you with any questions or issues you
                may have.
              </p>
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
              Have any questions or need assistance? Reach out to us, and we'll
              get back to you as soon as possible!
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
