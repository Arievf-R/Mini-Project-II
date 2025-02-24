import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://reqres.in/api/login", form);
      localStorage.setItem("access_token", res.data.token);
      setError("");
      setSuccess("Login Success");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300">
      <Navbar />
      <div className="flex items-center justify-center flex-1 p-6">
        <div className="w-full max-w-md p-8 bg-white border border-green-700 shadow-xl rounded-xl">
          <h1 className="mb-6 text-4xl font-semibold text-center text-green-800">
            Welcome Back!
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-green-700"
              >
                Email or Username
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-green-900 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-yellow-50"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-green-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 text-green-900 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-yellow-50"
              />
            </div>
            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
            {success && (
              <p className="mb-4 text-sm text-green-500">{success}</p>
            )}
            <button
              disabled={loading}
              onClick={handleLogin}
              className={`w-full px-4 py-3 font-semibold text-white rounded-lg shadow-md transition-colors duration-300 ${
                loading
                  ? "bg-yellow-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-800"
              } focus:outline-none focus:ring-2 focus:ring-green-400`}
              type="submit"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-green-700">
            Don't have an account?{" "}
            <Link
              to={`/regist`}
              className="text-green-600 underline hover:text-green-800"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
