import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const AddMobile = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-100 p-5">

        <div className="max-w-3xl mx-auto">

          <div className="mb-5">
            <Link to="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Add New Mobile
            </h1>

            <p className="text-gray-500 mb-6">
              Enter the mobile phone details below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block mb-2 font-medium">
                  Mobile Name
                </label>
                <input
                  type="text"
                  placeholder="Enter mobile name"
                  className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Brand
                </label>
                <input
                  type="text"
                  placeholder="Enter brand"
                  className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Model
                </label>
                <input
                  type="text"
                  placeholder="Enter model"
                  className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  RAM
                </label>
                <input
                  type="text"
                  placeholder="Example: 8GB"
                  className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Storage
                </label>
                <input
                  type="text"
                  placeholder="Example: 128GB"
                  className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Colour
                </label>
                <input
                  type="text"
                  placeholder="Enter colour"
                  className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
                />
              </div>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Add Mobile
              </button>

              <Link
                to="/"
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </Link>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default AddMobile