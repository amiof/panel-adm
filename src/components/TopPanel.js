import React from "react";
import logo from "../pic/logo.jpg";
import { bell, mail } from "../pic/svg";


const TopPanel = () => {
  return (
    <div  className=" h-30  flex flex-row">
        <div className="h-14 w-screen flex flex-row-reverse shadow-lg justify-between  bg-gray-900 rounded-2xl m-5 p-9 items-center text-white ">
            <div className="flex justify-between  align-middle w-50  items-center">
            <div className="mr-4">
            <h3>{`username:  amiro` }</h3>
            </div>
            <img src={logo} alt="logo" className="w-12 rounded-full m-3 "></img>
            </div>
        <div className="flex w-35 justify-between">
            <div className="relative  w-20 flex justify-center"><p>{mail}<span className="absolute  w-5 h-5 align-middle top-5 right-3 text-center text-white font-bold bg-red-600 rounded-full" >1</span></p></div>
            <span className="relative"><p>{bell}<spn className="absolute  w-5 h-5 align-middle top-5 -right-3 text-center text-white font-bold bg-red-600 rounded-full">5</spn></p></span>
        </div>
        </div>
    </div>
  );
};

export default TopPanel;
