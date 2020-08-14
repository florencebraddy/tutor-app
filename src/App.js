import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/pages/NavBar";
import SignUp from "./components/pages/SignUp";
import HomePageContainer from "./components/HomePageContainer";
import BottomNavigation from "./components/BottomNavigation";
// import UserForm from "./components/pages/UserForm";
import books from "./images/books.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${books})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="Home-page-background">
        <header className="App-header">
          <NavBar />
          <HomePageContainer />
          <BottomNavigation />
          {/* <SignUp /> */}
          {/* <UserForm /> */}
        </header>
      </div>
    </div>
  );
}

export default App;
