import axios from "axios";
import React from "react";

export const App = () => {
  const getUserList = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=1`);
      console.log("res: ", res);
    } catch (error) {
      console.log(error);
    }
  };
  return <div div>App</div>;
};
