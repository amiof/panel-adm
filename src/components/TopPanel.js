import React from 'react';
import logo from "../pic/logo.jpg"

const TopPanel = () => {
    return (

        
      
            <div className="h-14 w-screen flex flex-row-reverse shadow-lg   bg-gray-900 rounded-2xl m-5 p-9 items-center text-white ">
            <div ><img src={logo} alt="logo" className="w-12 rounded-full m-3 "></img></div>
             <div><h3 >admin</h3></div>
            
        
        
        </div>
        
    );
};

export default TopPanel;