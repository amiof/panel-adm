import React, {useEffect, useState} from "react";
import { dashbord, manage, other, users } from "../pic/svg";
const RightPanel = () => {
  // const [nav, setNav]=useState([])
  useEffect(()=>{
    getelement()
  },[])

  const getelement =()=>{
    const getEl= document.querySelectorAll(".nav-link")
    console.log(getEl)
    getEl.forEach(element => {
      element.onclick= clickHandler
      
    });
  }

  
  const clickHandler =(e)=>{
    
    e.preventDefault()
    e.target.classList.toggle("visited")
    //  console.log(e)
    
    
  }
  return (
    <div className="bg-black/95 flex flex-col w-1/5">
      <div className="w-full shadow-2xl shadow-dark-500 rounded-xl min-h-screen mt-4 bg-gray-900">
        <ul className=" mt-16 divide-y divide-slate-700 text-white/60  font-vazir font-bold ">
          <a
            href="./df"
            className="nav-link group  ">
            {dashbord}داشتبورد
            <div className="group-hover:bg-red-600  w-1 inline-block"></div>
          </a>
          <a
            href="./#"
            className="nav-link group">
                 {users}کاربران
            <div className="group-hover:bg-red-600  w-1 inline-block"></div>
          </a>
          <a
            href="./#"
            className="nav-link group"
          >{manage}مدیریت
            <div className="group-hover:bg-red-600  w-1 inline-block"></div>
          </a>
          <a
            href="./#"
            className="nav-link group"
          >  {other}دیگر<div className="group-hover:bg-red-600  w-1 inline-block"></div>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default RightPanel;
