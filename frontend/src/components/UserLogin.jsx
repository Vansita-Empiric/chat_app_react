import React, { useState } from "react";
import { FaReact } from "react-icons/fa6";
import "../style.css";
import _ from "lodash";

const UserLogin = ({ setUser }) => {
  const [username, setUsername] = useState();

  const handleUser = () => {
    if (!username) return;
    localStorage.setItem("user", username);
    setUser(username);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id/${_.random(1, 1000)}/200/300`
    );
  };

  return (
    <div className="login_container">
      <div className="login_title">
        <FaReact className="login_icon" />
        <h1>Chat app</h1>
      </div>
      <div className="login_form">
        <input
          type="text"
          placeholder="Enter a unique name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleUser}>Log In</button>
      </div>
    </div>
  );
};

export default UserLogin;
