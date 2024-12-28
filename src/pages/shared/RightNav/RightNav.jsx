import React from "react";
import { IoLogoGithub, IoLogoGoogle } from "react-icons/io5";
import { SiFacebook } from "react-icons/si";
import { SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import { Link } from "react-router-dom";
import qzone2 from '../../../assets/class.png';
import qzone3 from '../../../assets/playground.png';
import qzone1 from '../../../assets/swimming.png';

const RightNav = () => {
  return (
    <div className=" sticky -top-96 pb-5">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline flex w-full items-center text-blue-400 ">
          <IoLogoGoogle />
          <span>Login with Gogle</span>
        </button>
        <button className="btn btn-outline w-full ">
          <IoLogoGithub />
          Login with Github
        </button>
      </div>

      <div className="">
        <h2 className="text-2xl font-bold mt-7 mb-5">Find Us on </h2>
        <button className="btn text-base btn-outline border-b-0 rounded-b-none w-full  border-[#E7E7E7] py-4 justify-start flex items-center">
          <SiFacebook className="text-blue-600" />
          <Link  className="text-[#706F6F] ">Facebook</Link>
        </button>
        <button className="btn btn-outline rounded-t-none rounded-b-none border-b-0 w-full  border-[#E7E7E7]  flex items-center justify-start text-base py-4 ">
          <SlSocialTwitter className="text-sky-600" />
          <Link className="text-[#706F6F]" >Twitter</Link>
        </button>
        <button className="btn btn-outline rounded-t-none w-full  border-[#E7E7E7] flex items-center justify-start text-base py-4">
          <SlSocialInstagram className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
          <Link className="text-[#706F6F]">Instragum</Link>
        </button>
      </div>

      {/* Q-Zone */}
      <div className="space-y-4 mt-8 bg-slate-50">
        <h2 className="text-2xl font-bold p-4">Q-Zone</h2>
        <div>
            <img src={qzone1} alt="" />
        </div>
        <div>
            <img src={qzone2} alt="" />
        </div>
        <div>
            <img src={qzone3} alt="" />
        </div>
       
      </div>

    </div>
  );
};

export default RightNav;
