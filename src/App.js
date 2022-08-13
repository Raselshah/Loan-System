import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import UserInfo from "./Components/UserInfo/UserInfo";
import UserDetails from "./Components/UserDetails/UserDetails";
import BillDetails from "./Components/BillDetails/BillDetails";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userData, setUserData] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const getDataUserInfo = (data) => {
    setUserData(data);
  };
  const getDataUserDetails = (data) => {
    setUserDetails(data);
  };
  return (
    <div className="max-w-screen-2xl mx-auto p-12 bg-sky-200 h-screen">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            index
            element={<UserInfo getDataUserInfo={getDataUserInfo} />}
          />
          <Route
            path="userInfo"
            element={<UserDetails getDataUserDetails={getDataUserDetails} />}
          />
          <Route
            path="loanDetails"
            element={
              <BillDetails userData={userData} userDetails={userDetails} />
            }
          />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
