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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-8 bg-yellow-200 border-2 border-green-800 shadow-2xl opacity-90 rounded-xl">
    <h1 className="mb-6 text-3xl font-bold text-center text-green-900 retro-font">
      Login
    </h1>

    <form>
      <!-- Input Email -->
      <div className="mb-4 relative">
        <input
          placeholder="Email/Username"
          type="email"
          name="email"
          className="w-full px-10 py-2 text-green-900 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-50"
        />
        <span className="absolute inset-y-0 left-3 flex items-center text-green-700">
          <i className="fas fa-envelope"></i>
        </span>
      </div>

      <!-- Input Password -->
      <div className="mb-4 relative">
        <input
          id="password"
          placeholder="Password"
          type="password"
          name="password"
          className="w-full px-10 py-2 text-green-900 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-50"
        />
        <span className="absolute inset-y-0 left-3 flex items-center text-green-700">
          <i className="fas fa-lock"></i>
        </span>
        <span
          id="togglePassword"
          className="absolute inset-y-0 right-3 flex items-center text-green-700 cursor-pointer"
        >
          <i id="eyeIcon" className="fas fa-eye"></i>
        </span>
      </div>

      <!-- Error or Success Messages -->
      <p className="mb-4 text-sm text-red-500 hidden" id="error">
        Error message here.
      </p>
      <p className="mb-4 text-sm text-green-500 hidden" id="success">
        Success message here.
      </p>

      <!-- Submit Button -->
      <button
        className="w-full px-4 py-2 font-semibold text-yellow-100 bg-green-600 rounded-lg shadow retro-font hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
        type="submit"
      >
        Login
      </button>
    </form>

    <!-- Additional Options -->
    <p className="mt-6 text-sm text-center text-green-900">
      Forgot password?{" "}
      <a
        href="#"
        className="text-green-600 underline hover:text-green-800 retro-font"
      >
        Click here
      </a>
    </p>
    <p className="mt-4 text-sm text-center text-green-900">
      Or login with:
    </p>
    <div className="flex justify-center gap-4 mt-4">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700"
      >
        <i className="fab fa-facebook-f"></i>
      </button>
      <button
        className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-700"
      >
        <i className="fab fa-google"></i>
      </button>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};
