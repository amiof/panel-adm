import React from "react";
import Main from "../Main";
import RightPanel from "../RightPanel";
import TopPanel from "../TopPanel";

const Layout = () => {
  return (
    <>
      <div className="flex flex-row-reverse">
        <div className="w-4/5 bg-slate-500" >
          <div className=" h-30  flex flex-row">
            <TopPanel />
          </div >
            <Main></Main>
        </div>
        <RightPanel />
      </div>
    </>
  );
};

export default Layout;
