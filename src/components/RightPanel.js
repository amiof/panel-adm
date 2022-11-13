import React from "react";
import { dashbord, manage, other, users } from "../pic/svg";
const RightPanel = () => {
  return (
    <div className="bg-black/95 flex flex-col w-1/5">
      <div className="w-full shadow-2xl shadow-dark-500 rounded-xl min-h-screen mt-4 bg-gray-900">
        <ul className=" mt-16 divide-y divide-slate-700 text-white/60  font-vazir font-bold ">
          <a
            href="./#"
            className="p-5 hover:text-white hover:bg-gray-800 flex justify-between align-middle group  ">
            {dashbord}داشتبورد
            <div className="group-hover:bg-red-600  w-1 inline-block"></div>
          </a>
          <a
            href="./#"
            className="p-5 hover:text-white hover:bg-gray-800 flex justify-between align-middle group">
                 {users}کاربران
            <div className="group-hover:bg-red-600  w-1 inline-block"></div>
          </a>
          <a
            href="./#"
            className="p-5 hover:text-white hover:bg-gray-800 flex justify-between align-middle group"
          >{manage}مدیریت
            <div className="group-hover:bg-red-600  w-1 inline-block"></div>
          </a>
          <a
            href="./#"
            className="p-5 hover:text-white hover:bg-gray-800 flex justify-between align-middle group"
          >  {other}دیگر<div className="group-hover:bg-red-600  w-1 inline-block"></div>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default RightPanel;
