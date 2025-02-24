import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState([]);
  const getUserList = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=1`);
      console.log("res: ", res);
      setUserList(res.data.data);
    } catch (error) {
      console.log("err: ", error);
    }
  };
  useEffect(() => {
    getUserList();
  }, []);
  return (
    <div>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>
            <div>
              <img src={user.avatar} alt="img" />
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
              <p>{user.email}</p>
            </div>
          </li>;
        ))}
      </ul>
    </div>
  );
};
