import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold text-gray-800">Mobile Dashboard</h2>

          <Link
            to="/addmobile"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Mobile
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-5 rounded-lg text-center">
            <h2 className="text-gray-500">Total Mobiles</h2>

            <h1 className="text-3xl font-bold text-blue-600 mt-2">0</h1>
          </div>

          <div className="bg-white p-5 rounded-lg text-center">
            <h2 className="text-gray-500">Total Brands</h2>

            <h1 className="text-3xl font-bold text-green-600 mt-2">0</h1>
          </div>

          <div className="bg-white p-5 rounded-lg text-center">
            <h2 className="text-gray-500">Total Value</h2>

            <h1 className="text-3xl font-bold text-purple-600 mt-2">₹0</h1>
          </div>
        </div>

        <div id="mobiles">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Available Mobiles
          </h2>

          <div className="bg-white rounded-lg p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Mobiles Available
            </h2>

            <p className="text-gray-500 mt-2">
              Your mobile collection is currently empty.
            </p>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-5 hover:bg-blue-700">
              Add Your First Mobile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
