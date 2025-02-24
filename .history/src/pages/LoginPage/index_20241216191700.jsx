import { Navbar } from "../../components/Navbar";
export const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
      </form>
    </div>
  );
};
