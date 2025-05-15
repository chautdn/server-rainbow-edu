import React from "react";
import { FaTimes, FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ParentsMenu = ({ onClose }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        onClose();
        navigate(path);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-auto bg-[#2c2faa] z-50 text-white p-8">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <FaUserShield />
                    <span>Parents</span>
                </div>
                <button onClick={onClose} className="text-2xl">
                    <FaTimes />
                </button>
            </div>

            <div className="mt-12 space-y-10 pl-4">
                <div onClick={() => handleNavigation("/settings")} className="cursor-pointer hover:opacity-80 transition-opacity">
                    <h3 className="text-xl font-semibold border-b border-white w-fit mb-1">Settings →</h3>
                    <p className="text-gray-200">Parent Details, Subscription Management, Child Details</p>
                </div>
                <div onClick={() => handleNavigation("/parent-dashboard")} className="cursor-pointer hover:opacity-80 transition-opacity">
                    <h3 className="text-xl font-semibold border-b border-white w-fit mb-1">Reports →</h3>
                    <p className="text-gray-200">Child Activity, Curriculum Progress</p>
                </div>
                <div onClick={() => handleNavigation("/help")} className="cursor-pointer hover:opacity-80 transition-opacity">
                    <h3 className="text-xl font-semibold border-b border-white w-fit mb-1">Help →</h3>
                </div>
            </div>
        </div>
    );
};

export default ParentsMenu;
