import React, { useEffect } from "react";
import { dashbord, manage, other, users } from "../pic/svg";
const RightPanel = () => {
  // const [nav, setNav]=useState([])
  useEffect(() => {
    getelement();
  }, []);

  const getelement = () => {
    const getEl = document.querySelectorAll(".nav-link");
    getEl.forEach((element) => {
      element.onclick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("visited");
        const parent = e.target.parentNode.nextElementSibling;
        parent && parent.classList.toggle("hid");
      };
    });
  };

  return (
    <div className="bg-slate-500 flex flex-col w-1/5">
      <div className="w-full shadow-2xl shadow-dark-500 rounded-xl min-h-screen mt-4 bg-gray-900">
        <ul className=" mt-16 divide-y divide-slate-700 text-white/60  font-vazir ">
          <li>
            <div className="flex w-full justify-between rounded-3xl group ">
              <div className="group-hover:bg-red-600  w-1 inline-block"></div>
              <a href="./df" className="nav-link group  ">
                <p className="ml-5 mr-0">{dashbord}</p>
                داشتبورد
              </a>
            </div>
            <ul className="hidden font-vazir font-light relative  ">
              <li className="sub-link">
                <a href="./#">مدیریت داشتبورد</a>
              </li>
              <li className="sub-link">
                <a href="./#">شخصی سازی</a>
              </li>
              <li className="sub-link">
                <a href="./#"> لایسنس</a>
              </li>
            </ul>
          </li>

          <li >
            <div className="flex w-full justify-between rounded-3xl group ">
              <div className="group-hover:bg-red-600  w-1 inline-block"></div>
              <a href="./#" className="nav-link ">
                <p className="ml-5 mr-0">{users}</p>
                کاربران
              </a>
            </div>
            <ul className="hidden font-vazir font-light relative  ">
              <li className="sub-link">
                <a href="./#">اضافه کردن کاربر جدید</a>
              </li>
              <li className="sub-link">
                <a href="./#">حذف کاربر</a>
              </li>
              <li className="sub-link">
                <a href="./#">ویرایش کاربر</a>
              </li>
            </ul>
          </li>

          <div className="flex w-full justify-between rounded-3xl group">
            <div className="group-hover:bg-red-600  w-1 inline-block"></div>
            <a href="./#" className="nav-link group">
              <p className="ml-5 mr-0">{manage}</p>
              مدیریت
            </a>
          </div>
          <div className="flex w-full justify-between rounded-3xl group">
            <div className="group-hover:bg-red-600  w-1 inline-block"></div>
            <a href="./#" className="nav-link group">
              {" "}
              <p className="ml-5 mr-0">{other}</p>
              دیگر
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default RightPanel;
