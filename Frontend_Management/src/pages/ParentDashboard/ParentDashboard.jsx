import PlayerSelector from "../../components/dashBoard/PlayerSelector";
import WeeklySummary from "../../components/dashBoard/WeeklySummary";
import CourseProgress from "../../components/dashBoard/CourseProgress";
import ParentDashboardMenu from "../../components/navbar/ParentDashboardMenu";

export const ParentDashboard = () => {
    return (
        <div className="bg-[#f1f0f9] min-h-screen p-6">
            <ParentDashboardMenu />
            <div className="max-w-3xl mx-auto flex flex-col">
                <div className="mb-6">
                    <PlayerSelector />
                </div>
                <div className="mb-6">
                    <WeeklySummary />
                </div>
                <div>
                    <CourseProgress />
                </div>
            </div>
        </div>
    );
}