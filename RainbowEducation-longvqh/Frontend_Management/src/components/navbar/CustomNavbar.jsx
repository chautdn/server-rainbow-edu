import React from "react";
import { useState } from "react";

import NavItem from "./NavItem";
import { FaHome, FaBookOpen, FaGamepad, FaPrint, FaUserShield, FaStar } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi"; // Thay thế avatar bằng icon tương tự
import { useLocation } from "react-router-dom";
import ParentsMenu from "./ParentsMenu";

const CustomNavbar = ({ isCompact }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showParentsMenu, setShowParentsMenu] = useState(false);

  return (
    <div
      className={`text-white flex items-center justify-between transition-all duration-500 ${
        isCompact ? "h-28 py-0" : "h-52 p-6"
      } bg-[#0a085f]`}
      style={{ minHeight: isCompact ? 112 : 208 }}
    >
      {/* Left section */}
      <div className={`flex ${isCompact ? 'flex-row items-center space-x-4 pl-8' : 'flex-col items-start space-y-6 pl-8'}`}>
        <button
          onClick={() => setShowParentsMenu(true)}
          className={`rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${
            isCompact
              ? "w-12 h-12 bg-[#3535a5] p-0"
              : "bg-blue-500 hover:bg-blue-600 px-4 py-2 w-auto h-auto"
          }`}
        >
          <FaUserShield className={isCompact ? "text-2xl" : undefined} />
          {!isCompact && <span>Parents</span>}
        </button>
        {isCompact ? (
          <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center">
            <PiStudentBold className="text-2xl" />
          </div>
        ) : (
          <div className="bg-[#1c1a73] px-3 py-1 rounded-full flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center">
              <PiStudentBold className="text-xl" />
            </div>
            <span>Level 0</span>
            <FaStar className="text-yellow-400" />
            <div className="bg-[#2e2c83] text-sm px-2 py-1 rounded-full">1</div>
          </div>
        )}
      </div>

      {/* Center section */}
      <div className="flex items-center space-x-8">
        <NavItem
          icon={<FaHome />}
          label={isCompact ? "" : "Home"}
          active={currentPath === "/home"}
          path="/home"
          isCompact={isCompact}
        />
        <NavItem
          icon={<FaBookOpen />}
          label={isCompact ? "" : "Curriculum"}
          active={currentPath === "/curriculum"}
          path="/curriculum"
          isCompact={isCompact}
        />
        <NavItem
          icon={<FaGamepad />}
          label={isCompact ? "" : "Game Zone"}
          active={currentPath === "/game-zone"}
          path="/game-zone"
          isCompact={isCompact}
        />
        <NavItem
          icon={<FaPrint />}
          label={isCompact ? "" : "Printables"}
          active={currentPath === "/printables"}
          path="/printables"
          isCompact={isCompact}
        />
      </div>

      {/* Right section */}
      <div className={`flex flex-col items-end ${isCompact ? "space-y-0 pr-8" : "space-y-4 pr-8"}`}>
        {!isCompact && (
          <div className="flex items-center space-x-1">
            <span className="text-white font-bold">Rainbow</span>
            <span className="text-blue-300 font-bold">Learn</span>
            <span className="bg-blue-400 text-white px-2 rounded text-sm">STARTER</span>
          </div>
        )}
        <button
          className={`flex items-center justify-center shadow-md transition-all duration-500 font-semibold ${
            isCompact
              ? "w-36 h-12 bg-[#e3e6f5] text-[#3535a5] text-base px-0 py-0"
              : "bg-white text-black px-4 py-2 rounded-full"
          } rounded-full`}
        >
          <span>{isCompact ? "Unlock All" : "Unlock All"}</span>
          <FaUserShield className={isCompact ? "ml-2 text-2xl" : undefined} />
        </button>
        {!isCompact && (
          <div className="flex items-center space-x-2">
            <span className="bg-blue-400 text-white px-2 rounded-full text-sm">2</span>
            <span className="text-cyan-200 text-sm">Free activities left today!</span>
          </div>
        )}
              </div>
      {showParentsMenu && <ParentsMenu onClose={() => setShowParentsMenu(false)} />}
    </div>
    
  );
};

export default CustomNavbar;
