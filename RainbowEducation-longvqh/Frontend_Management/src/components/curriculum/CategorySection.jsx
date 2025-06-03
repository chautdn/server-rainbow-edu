import React from 'react';

export default function CategorySection({ title, active }) {
  const grades = ['Pre-K', 'K', '1', '2', '3', '4', '5'];
  const [selectedGrade, setSelectedGrade] = React.useState('Pre-K');

  return (
    <div
      className={`rounded-xl bg-[#3a3fa3] shadow p-6 min-h-[75vh] font-sans transition-all duration-500
        ${active ? 'scale-100 opacity-100' : 'scale-90 opacity-60 pointer-events-none'}`}
    >
      {/* Header */}
      <h2 className="font-extrabold text-2xl text-white tracking-wide mb-6">{title.toUpperCase()}</h2>

      {/* Grade */}
      <div className="flex items-center gap-4 mb-8 pl-5">
        <span className="text-white text-lg font-semibold mr-1" style={{ minWidth: 70 }}>Lớp</span>
        {grades.map((grade) => (
          <button
            key={grade}
            onClick={() => setSelectedGrade(grade)}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold transition-all
              ${selectedGrade === grade
                ? 'bg-[#6ee7e7] text-[#23326d] shadow-lg'
                : 'bg-[#23277e] text-white hover:bg-[#4b50b7]'}
            `}
          >
            {grade}
          </button>
        ))}
      </div>

      {/* Danh sách khóa học */}
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-[#302f5b] rounded-md text-white text-xs p-4 min-w-[220px] min-h-[220px] shadow-md hover:brightness-110 transition flex flex-col"
          >
            <div className="w-full h-32 bg-[#1f1f2e] rounded mb-4" />
            <div className="font-semibold text-base mb-2">Tên khóa học</div>
            <div className="text-xs">Kỹ năng</div>
          </div>
        ))}
      </div>
    </div>
  );
}
