import React from "react";
import { useNavigate } from "react-router-dom";

const NavItem = ({ icon, label, active, path, isCompact }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer transition-all duration-500 flex flex-col items-center justify-center
        ${isCompact ? "w-14 h-14 rounded-full bg-[#3535a5] mx-2 flex-shrink-0" : "px-4 py-2 rounded-full"}
        ${active ? (isCompact ? "bg-[#b8fff6] border-2 border-[#7fffd4]" : "bg-[#abf2e3] text-[#0a085f] font-bold shadow-lg") : (isCompact ? "bg-[#3535a5] text-white" : "bg-[#29277e] text-white")}
      `}
      style={isCompact ? { boxShadow: active ? '0 0 0 3px #b8fff6' : undefined } : {}}
    >
      <div className={`text-2xl flex items-center justify-center w-full h-full ${isCompact ? "" : ""}`}>{icon}</div>
      {!isCompact && <span className="text-sm mt-1">{label}</span>}
    </div>
  );
};

export default NavItem;
