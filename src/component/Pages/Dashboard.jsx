import React from "react";
import Logo from "../Images/Logo.svg";
import searchIcon from "../Images/searchicon.svg";
import notifier from "../Images/notifier.svg";
import avatar from "../Images/avatar.svg";
import dropdown from "../Images/Vector.svg";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <nav>
        <img src={Logo} alt="Logo" />
        <div className="searchInput">
          <input type="search" placeholder="search for anything" />
          <button>
            <img src={searchIcon} alt="Search icon" />
          </button>
        </div>
        <div className="userDetails">
          <p>Docs</p>
          <img src={notifier} alt="notifier" />
          <img src={avatar} alt="avatar" />
          <p>Adedeji</p>
          <img src={dropdown} alt="dropdown menu" />
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
