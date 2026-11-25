import React from "react";
import Header from "./components/Header";
import Searchbar from "./components/SearchBar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 p-5">

        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to Mobile Store
          </h1>

          <p className="text-gray-600 mt-2">
            Manage your mobile collection easily
          </p>
        </div>

        <Searchbar />

        <Dashboard />

      </div>

      <Footer />
    </>
  );
};

export default Home;