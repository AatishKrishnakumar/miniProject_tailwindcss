import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="flex justify-center mb-8">

        <input
          type="text"
          placeholder="Search by mobile name or brand..."
          className="w-1/2 p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 "
        />

      </div>
    </>
  );
};

export default Searchbar;