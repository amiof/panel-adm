import React from 'react';
const RightPanel = () => {
    return (
        <div className="bg-gray-50 flex flex-col w-1/5">
            <div className="w-full shadow-2xl shadow-dark-500 rounded-xl min-h-screen mt-4 border-2" >
                
                <ul className=" mt-16 divide-y-2 divide-dashed">
                    <li className="p-5 ">داشتبورد</li>
                    <li className="p-5">کاربران </li>
                    <li className="p-5 ">مدیریت</li>
                    <li className="p-5">دیگر</li>
                </ul>
                
            </div>
        </div>
    );
};

export default RightPanel;