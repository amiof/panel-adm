import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <div className="h-5/6 max-h-screen flex justify-center items-center ">
      <div className="w-11/12 h-full mt-10  bg-gray-900 rounded-3xl flex flex-wrap justify-center gap-6 items-center border border-gray-700"dir="ltr">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Main;
