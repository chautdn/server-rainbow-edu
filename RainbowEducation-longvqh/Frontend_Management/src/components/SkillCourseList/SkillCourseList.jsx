const SkillCourseList = ({ skillName, courses, onViewAll }) => {
  return (
    <div
      className={`max-w-[1200px] mx-auto rounded-2xl py-10 px-6 my-8 shadow-md bg-[#4441d3]`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-white text-xl uppercase tracking-wide">
          {skillName}
        </h2>
        <button
          onClick={onViewAll}
          className="text-white font-bold text-base px-8 py-2 rounded-full border-2 border-white bg-[#6366d6] flex items-center gap-2 shadow hover:bg-[#7a7cf0] transition-all duration-200"
        >
          Discover More <span className="ml-2 text-xl">→</span>
        </button>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-[#6ee7e7]">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#120f87] rounded-xl p-3 text-white shadow-md hover:scale-105 transition-transform duration-200"
          >
            {/* Image Placeholder */}
            <div className="h-28 rounded-xl bg-white mb-3 border-4 border-white overflow-hidden">
              {/* If you have an image, uncomment this and use course.image */}
              {/* <img src={course.image} alt={course.name} className="w-full h-full object-cover" /> */}
            </div>
            {/* Course Name */}
            <div className="text-base font-bold mb-1 truncate">{course.name}</div>
            {/* Course Description (e.g., "33 skills") */}
            <div className="text-xs text-gray-300">{course.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCourseList;