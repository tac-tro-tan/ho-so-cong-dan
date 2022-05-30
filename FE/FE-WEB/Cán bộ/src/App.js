import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import Admin1 from "./components/auth/admin1";
import Admin2 from "./components/auth/admin2";
import Admin from "./components/auth/admin";
// {/* tấc tro tàn sửa 1 */}
import Admin3 from "./components/auth/admin3";
import Home from "./components/Home";
import Contributions from "./components/Contributions";
import Yourownappointment from "./components/Yourownappointment"
import RequestList from "./components/RequestList";
import Notification from "./components/Notification";
import Request from "./components/Request";
import Statistics from "./components/Statistics";
import AddUser from "./components/user/AddUser";
import Relative from "./components/user/Relative";
import PageNotFound from "./components/notFound";
import "./App.css";
import CanBo from "./components/superAdmin/danhSachCanBo";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/Home"
          element={
            <Admin>
              <Home />
            </Admin>
          }
        />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route
          exact
          path="/Contributions"
          element={
            <Admin1>
              <Contributions />
            </Admin1>
          }
        />
        <Route
          exact
          path="/Request"
          element={
            <Admin1>
              <Request />
            </Admin1>
          }
        />
         <Route
          exact
          path="/Yourownappointment"
          element={
            <Admin1>
              <Yourownappointment />
            </Admin1>
          }
        />
        <Route
          exact
          path="/RequestList"
          element={
            <Admin2>
              <RequestList />
            </Admin2>
          }
        />
        <Route
          exact
          path="/Notification"
          element={
            <Admin2>
              <Notification />
            </Admin2>
          }
        />
        <Route
          exact
          path="/Statistics"
          element={
            <Admin2>
              <Statistics />
            </Admin2>
          }
        />
        {/* tấc tro tàn sửa 1 */}
        <Route
          exact
          path="/Notification1"
          element={
            <Admin3>
              <Notification />
            </Admin3>
          }
        />
        <Route
          exact
          path="/canbo"
          element={
            <Admin3>
              <CanBo/>
            </Admin3>
          }
        />
        {/* tấc tro tàn sửa 2 */}
        <Route exact path="/user/AddUser" element={<AddUser />} />
        <Route exact path="/user/:id" element={<Relative />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
