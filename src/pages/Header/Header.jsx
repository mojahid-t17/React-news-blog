import moment from "moment";
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-6xl font-aguDisplay my-5">The Daily NewsBlogs</h1>
      <p className="text-xl text-[#706F6F] my-2">
        Journalism Without Fear or Favour
      </p>
      <h2 className="text-xl font-semibold text-[#403F3F]">
        {moment().format("dddd, MMMM D, YYYY")}
      </h2>

      <div className="flex items-center bg-[#F3F3F3] py-2 mt-4 mx-2">
        <a
          href="#_"
          className="relative px-5 ms-5 py-4 my-4 font-medium group flex-shrink-0 whitespace-nowrap"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black"></span>
          <span className="absolute inset-0 w-full h-full bg-[#D72050] border-2 border-black group-hover:bg-rose-900"></span>
          <span className="relative text-xl text-white group-hover:text-white">
            Breaking News
          </span>
        </a>

        <Marquee speed={150} className=" text-rose-700  text-xl">
            <Link className="ml-20" to='/'>
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </Link>
            <Link className="ml-20" to='/'>
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </Link>
            <Link to='/'>
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
            </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
