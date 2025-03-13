import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import AboutUs from "./components/AboutUs/aboutUs";
import ContactUs from "./components/contactUs/contactUs";
import Catageries from "./components/catageroies/catageries";
import Articles from "./components/articles/articles";
import Articledetails from "./components/articleDetails/articledetails";
import Login from "./components/login/login";
import Register from "./components/register/register";
import UserProfile from "./components/userProfile/userProfile";
import Bookmark from "./components/bookmark/bookmark";
import ArticleCreation from "./components/articleCreation/articleCreation";
import Admin from "./components/adminDash/admin";
import Navbar from "./components/navbar/navbar";
import Payment from "./components/payment/payment";
import DigiboostLandingPage from "./components/DigiboostLandingPage/DigiboostLandingPage"

function App() {
  return (
    <Router>

        {/* <Navbar/> */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/categories" element={<Catageries />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articlesDetails" element={<Articledetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/create-article" element={<ArticleCreation />} />
        <Route path="/DigiboostLandingPage" element={<DigiboostLandingPage />} />

        <Route path="/admin" element={<Admin />} />

      </Routes>
    </Router>
  );
}

export default App;
