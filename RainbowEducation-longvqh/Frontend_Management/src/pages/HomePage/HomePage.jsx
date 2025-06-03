import { useState,useEffect } from "react";
import CustomNavbar from "../../components/navbar/CustomNavbar";
import SkillCourseList from "../../components/SkillCourseList/SkillCourseList";
import { sampleCourses } from "../../data/courseData"; // ✅ import từ file riêng
import BackgroundStars from "../../components/BackgroundStars";
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
    <div className="relative min-h-screen">
      <BackgroundStars />
      <main className="relative z-10">
        <div>
          <div className="sticky top-0 z-50 bg-[#0a085f]">
            <CustomNavbar isCompact={isCompact} />
            <div className="w-full h-12 bg-black/30 rounded-b-2xl blur-sm"></div>
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
          </div>
        </div>
      </main>
    </div>
  );
};
