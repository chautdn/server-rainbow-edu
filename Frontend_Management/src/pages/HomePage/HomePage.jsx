import { useState, useEffect } from "react";
import CustomNavbar from "../../components/navbar/CustomNavbar";
import SkillCourseList from "../../components/SkillCourseList/SkillCourseList";
import { sampleCourses } from "../../data/courseData";
import FallingNumbers from "../../components/sharedComponents/FallingNumbers";
import FallingShapes from "../../components/shapes/FallingShapes";
import ShapesAnimation from "../../components/sharedComponents/ShapesAnimation";

export const HomePage = () => {
  const [isCompact, setIsCompact] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-200 via-yellow-100 to-pink-200 overflow-hidden">
      {/* Animated Background Elements */}
      <FallingNumbers />
      <FallingShapes />
      <ShapesAnimation />
      
      {/* Orbiting Icons */}
      <span className="text-7xl orbiting-icon2 fixed top-20 right-10 z-0">
        🚀
      </span>
      <span className="text-8xl orbiting-icon fixed bottom-20 left-10 z-0">
        🚀
      </span>
      
      <main className="relative z-10">
        <div>
          <div className="sticky top-0 z-50 bg-[#0a085f]/80 backdrop-blur-md">
            <CustomNavbar isCompact={isCompact} />
          </div>
          <div className="p-6">
            <SkillCourseList
              skillName="KĨ NĂNG ĐỌC"
              courses={sampleCourses}
              onViewAll={() => alert("Xem thêm ĐỌC")}
            />
            <SkillCourseList
              skillName="KĨ NĂNG VIẾT"
              courses={sampleCourses}
              onViewAll={() => alert("Xem thêm VIẾT")}
              variant="blue-border"
            />
            
            {/* Fun Interactive Elements */}
            <div className="mt-12 text-center space-y-6">
              <div className="flex justify-center space-x-4">
                <div className="bg-yellow-300 p-4 rounded-full shadow-md animate-bounce">
                  🏆
                </div>
                <div className="bg-pink-300 p-4 rounded-full shadow-md animate-bounce">
                  🎉
                </div>
                <div className="bg-blue-300 p-4 rounded-full shadow-md animate-bounce">
                  🎮
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};