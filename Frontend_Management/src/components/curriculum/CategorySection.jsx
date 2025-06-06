import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategorySection({ title, active }) {
  const navigate = useNavigate();
  const grades = ['Pre-K', 'K', '1', '2', '3', '4', '5'];
  const [selectedGrade, setSelectedGrade] = React.useState('Pre-K');

  // Danh sách tên khóa học tiếng Việt
  const vietnameseCourseNames = [
    'Học chữ cái',
    'Tập đọc cơ bản',
    'Viết chữ đẹp',
    'Từ vựng hàng ngày',
    'Câu chuyện ngắn',
    'Thơ ca thiếu nhi',
    'Ngữ pháp cơ bản',
    'Giao tiếp hàng ngày'
  ];

  // Hoặc bạn có thể tạo nhiều bộ tên khác nhau tùy theo lớp
  const getCourseNamesByGrade = (grade) => {
    const coursesByGrade = {
      'Pre-K': [
        'Nhận biết chữ cái',
        'Màu sắc và hình khối',
        'Con vật quen thuộc',
        'Gia đình và bạn bè',
        'Trái cây và rau củ',
        'Phương tiện giao thông',
        'Thời tiết',
        'Số đếm cơ bản'
      ],
      'K': [
        'Bảng chữ cái tiếng Việt',
        'Tập viết chữ in hoa',
        'Từ đơn giản',
        'Câu chào hỏi',
        'Đọc tranh kể chuyện',
        'Hát đồng dao',
        'Tô màu chữ cái',
        'Ghép âm tiết'
      ],
      '1': [
        'Học chữ cái A-Z',
        'Viết chữ thường',
        'Đọc từng từ',
        'Câu đơn giản',
        'Truyện cổ tích',
        'Thơ hai câu',
        'Tập làm văn',
        'Chính tả cơ bản'
      ],
      '2': [
        'Ngữ âm tiếng Việt',
        'Viết đoạn văn ngắn',
        'Đọc hiểu văn bản',
        'Kể chuyện',
        'Thành ngữ dân gian',
        'Ca dao tục ngữ',
        'Tả người tả cảnh',
        'Làm văn miêu tả'
      ],
      '3': [
        'Phân tích từ loại',
        'Viết thư cá nhân',
        'Đọc truyện dài',
        'Thảo luận nhóm',
        'Văn học thiếu nhi',
        'Sáng tác thơ',
        'Kỹ năng thuyết trình',
        'Nghị luận đơn giản'
      ],
      '4': [
        'Ngữ pháp nâng cao',
        'Viết báo cáo',
        'Phân tích tác phẩm',
        'Tranh luận',
        'Văn học cổ điển',
        'Sáng tác truyện ngắn',
        'Diễn thuyết',
        'Luận văn ngắn'
      ],
      '5': [
        'Tinh thông ngữ pháp',
        'Viết luận văn',
        'Phê bình văn học',
        'Hùng biện',
        'Tác phẩm kinh điển',
        'Sáng tác sáng tạo',
        'Giao tiếp xã hội',
        'Tư duy phản biện'
      ]
    };

    return coursesByGrade[grade] || vietnameseCourseNames;
  };

  const handleCourseClick = (lessonIndex) => {
    if (title.toLowerCase().includes('tiếng việt')) {
      navigate(`/lesson-detail/vietnamese/lesson${lessonIndex + 1}`);
    }
  };

  const currentCourseNames = getCourseNamesByGrade(selectedGrade);

  return (
    <div
      className={`rounded-xl bg-[#3a3fa3] shadow p-6 min-h-[75vh] font-sans transition-all duration-500
        ${active ? 'scale-100 opacity-100' : 'scale-90 opacity-60 pointer-events-none'}`}
    >
      {/* Header */}
      <h2 className="font-extrabold text-2xl text-white tracking-wide mb-6">{title.toUpperCase()}</h2>

      {/* Grade */}
      <div className="flex items-center gap-4 mb-8 pl-5">
        <span className="text-white text-lg font-semibold mr-1" style={{ minWidth: 70 }}>Lớp</span>
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
        {currentCourseNames.map((courseName, i) => (
          <div
            key={i}
            onClick={() => handleCourseClick(i)}
            className="bg-[#302f5b] rounded-md text-white text-xs p-4 min-w-[220px] min-h-[220px] shadow-md hover:brightness-110 transition flex flex-col cursor-pointer"
          >
            <div className="w-full h-32 bg-[#1f1f2e] rounded mb-4" />
            <div className="font-semibold text-base mb-2">{courseName}</div>
            <div className="text-xs">Kỹ năng tiếng Việt</div>
          </div>
        ))}
      </div>
    </div>
  );
}