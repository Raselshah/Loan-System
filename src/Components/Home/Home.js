import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="tabs bg-sky-300">
        <Link className="tab tab-lifted text-lg text-white" to="/">
          Personal details
        </Link>
        <Link className="tab tab-lifted text-lg text-white" to="userInfo">
          Business details
        </Link>
        <Link className="tab tab-lifted text-lg text-white" to="loanDetails">
          Loan Application
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
