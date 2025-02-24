import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
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
    <div className="min-h-screen bg-yellow-100 flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-yellow-200 p-8 rounded-xl shadow-lg w-full max-w-md border-2 border-green-800">
          <h1 className="text-3xl font-bold text-center text-green-900 retro-font mb-6">
            Login
          </h1>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-green-800 font-medium retro-font mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-green-900 bg-yellow-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-green-800 font-medium retro-font mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-green-900 bg-yellow-50"
              />
            </div>
            {error && <p className="mb-4 text-red-500 text-sm">{error}</p>}
            {success && (
              <p className="mb-4 text-green-500 text-sm">{success}</p>
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
          <p className="mt-6 text-sm text-green-900 text-center">
            Don't have an account?{" "}
            <Link
              to={`/regist`}
              className="text-green-600 hover:text-green-800 retro-font underline"
            >
              Sign up
            </Link>
            <a href="/regist">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};
