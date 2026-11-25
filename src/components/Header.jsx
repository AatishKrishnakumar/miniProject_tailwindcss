import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-blue-600 text-white p-4">

        <div className="container mx-auto flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            Mobile Store
          </h1>

          <ul className="flex gap-5">

            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>

            <li>
              <a href="#mobiles" className="hover:text-gray-200">
                Mobiles
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-gray-200">
                About
              </a>
            </li>

          </ul>

        </div>

      </div>
    </>
  );
};

export default Header;