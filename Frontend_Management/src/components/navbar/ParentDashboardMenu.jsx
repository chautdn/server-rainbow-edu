
import { useNavigate } from "react-router-dom";

const ParentDashboardMenu = () => {
    const navigate = useNavigate();

    const handleGoToChildDashboard = () => {
        navigate('/home');
    };

    return (
        <div className="bg-gray-100 py-4 px-6 w-full relative">
            <div className="flex items-center">
                <button
                    className="flex items-center text-blue-900 hover:text-blue-700 transition-colors font-medium"
                    onClick={handleGoToChildDashboard}
                >
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Back to child dashboard
                </button>
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="font-bold text-xl text-gray-800">Parent Dashboard</h1>
            </div>
        </div>
    );
}

export default ParentDashboardMenu;