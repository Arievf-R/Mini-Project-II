import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://reqres.in/api/register", form);
      setError("");
      setSuccess("Registration successful.");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      console.log(res);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-100 ">
      <Navbar />
      <div className="flex items-center justify-center flex-1 p-4 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22152%22%20height=%22152%22%20viewBox=%220%200%20152%20152%22%3E%3Cg%20fill-rule=%22evenodd%22%3E%3Cg%20id=%22temple%22%20fill=%22%239C92AC%22%20fill-opacity=%220.45%22%3E%3Cpath%20d=%22M152%20150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2%200v-28h-8v20h-20v8h28zM82%2030v18h18V30H82zm20%2018h20v20h18V30h-20V10H82v18h20v20zm0%202v18h18V50h-18zm20-22h18V10h-18v18zm-54%2092v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20%2022H10v18h18v-18zm54%200v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20%2040v-18h18v18h-18zM30%200h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20%2048h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30%2050h18v18H30V50zm-2-40H10v18h18V10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] ">
        <div className="w-full max-w-md p-8 bg-yellow-200 border-2 border-green-800 shadow-2xl opacity-90 rounded-xl ">
          <h1 className="mb-6 text-3xl font-bold text-center text-green-900 retro-font">
            Register
          </h1>

          <form>
            <div className="mb-4 relative">
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 text-green-900 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-50"
              />
              <span className="absolute left-3 top-3 text-green-800">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <div className="mb-4 relative">
              <input
                placeholder="Username"
                type="text"
                name="username"
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 text-green-900 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-50"
              />
              <span className="absolute left-3 top-3 text-green-800">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div className="mb-4 relative">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                className="w-full pl-10 pr-10 px-4 py-2 text-green-900 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-50"
              />
              <span className="absolute left-3 top-3 text-green-800">
                <i className="fas fa-lock"></i>
              </span>
              <span
                className="absolute right-3 top-3 text-green-800 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
                ></i>
              </span>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                onChange={(e) =>
                  setFormData({ ...formData, agreement: e.target.checked })
                }
                className="mr-2"
              />
              <label htmlFor="agreement" className="text-green-900 text-sm">
                I agree to the terms and conditions
              </label>
            </div>

            {error && (
              <p className="mb-4 text-sm text-yellow-600 bg-yellow-100 border-l-4 border-yellow-600 px-4 py-2 rounded-lg shadow-md font-bold retro-font">
                <i className="fas fa-exclamation-circle mr-2"></i>
                {error}
              </p>
            )}

            {success && (
              <p className="mb-4 text-sm text-green-600 bg-green-100 border-l-4 border-green-600 px-4 py-2 rounded-lg shadow-md font-bold retro-font">
                <i className="fas fa-check-circle mr-2"></i>
                {success}
              </p>
            )}

            <button
              disabled={loading}
              onClick={handleRegister}
              className={`w-full px-4 py-2 font-semibold text-yellow-100 rounded-lg shadow retro-font ${
                loading
                  ? "bg-yellow-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-800"
              } focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1`}
              type="submit"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-green-900">
            Already have an account?{" "}
            <Link
              to={`/login`}
              className="text-green-600 underline hover:text-green-800 retro-font"
            >
              Login
            </Link>
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="px-4 py-2 text-yellow-100 bg-blue-600 rounded-lg shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1">
              <i className="fab fa-facebook-f"></i> Facebook
            </button>
            <button className="px-4 py-2 text-yellow-100 bg-red-600 rounded-lg shadow hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1">
              <i className="fab fa-google"></i> Google
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
