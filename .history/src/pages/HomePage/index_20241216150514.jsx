import { Navbar } from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
export const HomePage = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <Navbar />
      <h1>ini Home</h1>
    </div>
  );
};
