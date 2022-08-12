import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="tabs bg-sky-300">
        <Link className="tab tab-lifted text-lg text-white" to="user">
          Home
        </Link>
        <Link className="tab tab-lifted text-lg text-white" to="userInfo">
          User Info
        </Link>
        <Link className="tab tab-lifted text-lg text-white" to="loanDetails">
          Total Loan
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
