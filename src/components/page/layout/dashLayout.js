"use client";

import React, { useState, useEffect } from "react";
import DashNavbar from "./navbar";
import SidebarFull from "./sideBarFull/SideBarFull";
import { useSelector } from "react-redux";
import SideBarIcons from "./sideBarIcons/SideBarIcons";
import SideBarMain from "./SideBarMain";

const DashLayout = ({ children }) => {
  // local state variable
  const [windowWidth, setWindowWidth] = useState(0);

  // useEffect with event listener to check the window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let width = windowWidth > 768;
  const sidebarFull = useSelector((state) => state.event.sidebarFull);

  return (
    <div className="">
      <DashNavbar />
      <div className="flex items-start">
        {width && <SideBarMain />}
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

const MainContent = function ({ children }) {
  return <main className=" h-[calc(100vh-100px)] w-screen">{children}</main>;
};

export default DashLayout;
