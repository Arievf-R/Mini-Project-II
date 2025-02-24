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
      <div className="flex items-center justify-center flex-1 p-4 ">
        <div className="w-full max-w-md p-8 bg-yellow-200 border-2 border-green-800 shadow-lg rounded-xl bg-[url('/src/assets/topography.svg')]">
          <h1 className="mb-6 text-3xl font-bold text-center text-green-900 retro-font">
            Login
          </h1>

          <form>
            <div className="mb-4 ">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-green-800 retro-font"
              >
                Email/Username
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2 text-green-900 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-green-800 retro-font"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 text-green-900 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-50"
              />
            </div>
            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
            {success && (
              <p className="mb-4 text-sm text-green-500">{success}</p>
            )}
            <button
              disabled={loading}
              onClick={handleLogin}
              className={`w-full px-4 py-2 font-semibold text-yellow-100 rounded-lg shadow retro-font ${
                loading
                  ? "bg-yellow-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-800"
              } focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1`}
              type="submit"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-green-900">
            Don't have an account?{" "}
            <Link
              to={`/regist`}
              className="text-green-600 underline hover:text-green-800 retro-font"
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
