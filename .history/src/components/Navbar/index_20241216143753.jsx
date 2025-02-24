import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate.getItem("access_token");
  return (
    <div>
      <h1>ini Navbar</h1>
    </div>
  );
};
