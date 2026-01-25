import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* brief description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            {" "}
            Wear confidence. Own your style. Fresh fits, premium quality,
            delivered to your door.{" "}
          </p>
        </div>
        {/* information */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* contact details */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9087564312</li>
            <li>contact@foreverus.com</li>
          </ul>
        </div>
      </div>

      {/* copy-right */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright 2025@ forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
