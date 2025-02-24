import axios from "axios";
import React from "react";

export const App = async() => {
    const getUserList = () => {
        try { const res = await axios.get(`https://reqres.in/api/users?page=1`)
            console.log("res: ", res)
        } catch (error) {
            
        }
    }
  return <div div>App</div>;
};
