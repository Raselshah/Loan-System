import "./App.css";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import UserInfo from "./Components/UserInfo/UserInfo";
import UserDetails from "./Components/UserDetails/UserDetails";
import BillDetails from "./Components/BillDetails/BillDetails";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto p-12 bg-sky-200 h-screen">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="user" element={<UserInfo />} />
          <Route path="userInfo" element={<UserDetails />} />
          <Route path="loanDetails" element={<BillDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
