import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="tabs mx-auto flex justify-center">
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#808080" : "#C0C0C0",
          })}
          className="tab tab-lifted text-lg text-white"
          to="/"
        >
          Personal details
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#808080" : "#C0C0C0",
          })}
          className="tab tab-lifted text-lg text-white"
          to="userInfo"
        >
          Business details
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#808080" : "#C0C0C0",
          })}
          className="tab tab-lifted text-lg text-white"
          to="loanDetails"
        >
          Loan Application
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
