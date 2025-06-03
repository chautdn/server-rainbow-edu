import { Check } from "lucide-react";
import Navbar from "../../components/navbar/navbar";
import InfiniteScroll from "../../components/animations/infinite-scroll";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const ageGroups = [3, 4, 5, 6, 7];

export const LandingPage = () => {
  const [selectedAge, setSelectedAge] = useState(3);
  const [activeTab, setActiveTab] = useState("game");
  const [language, setLanguage] = useState("vi");

  return (
    <main className="min-h-screen">
      {/* navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 pt-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 justify-center">
              <p className="text-base text-white mb-4">
                Học và Chơi | Chuẩn bị hành trang tới lớp 1.
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Trẻ thấy niềm vui.
                <br />
                Bạn thấy thành tựu!
              </h1>
              <p className="text-lg mb-8">
                Cùng con bạn học và chơi qua những bài dạy bổ ích của chúng tôi
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/home"
                  className="bg-white text-indigo-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Parents, try for Free
                </Link>
                <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition">
                  Teachers, use for Free
                </button>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="../../../public/img/group-childrent.png"
                alt="Children learning"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 8C120 16 240 32 360 42C480 52 600 56 720 48C840 40 960 20 1080 12C1200 4 1320 8 1380 10L1440 12V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 text-center">
          {/* Age Selector + Language */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`w-8 h-8 rounded-full border-2 border-indigo-600 font-medium transition ${
                  selectedAge === age
                    ? "bg-indigo-900 text-white"
                    : "text-indigo-600 hover:bg-indigo-100"
                }`}
              >
                {age}
              </button>
            ))}
            <div className="border-l border-indigo-600 h-6 mx-4"></div>
            {/* Language Toggle */}
            <div className="flex border border-indigo-600 rounded-full overflow-hidden text-sm">
              <button
                onClick={() => setLanguage("vi")}
                className={`px-3 py-1 transition ${
                  language === "vi"
                    ? "bg-indigo-900 text-white"
                    : "text-indigo-600"
                }`}
              >
                Tiếng Việt
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 transition ${
                  language === "en"
                    ? "bg-indigo-900 text-white"
                    : "text-indigo-600"
                }`}
              >
                Tiếng Anh
              </button>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center mb-6">
            <div className="flex border border-indigo-900 rounded-full overflow-hidden">
              <button
                onClick={() => setActiveTab("game")}
                className={`px-6 py-2 font-semibold transition ${
                  activeTab === "game"
                    ? "bg-indigo-900 text-white"
                    : "text-indigo-900 hover:bg-indigo-100"
                }`}
              >
                Trò chơi
              </button>
              <button
                onClick={() => setActiveTab("lesson")}
                className={`px-6 py-2 font-semibold transition ${
                  activeTab === "lesson"
                    ? "bg-indigo-900 text-white"
                    : "text-indigo-900 hover:bg-indigo-100"
                }`}
              >
                Bài Học
              </button>
            </div>
          </div>

          {/* Carousel (Swiper) */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-6xl mx-auto"
          >
            {[7, 3, 4, 5, 6].map((age, index) => (
              <SwiperSlide key={index}>
                <div className="border rounded-xl overflow-hidden shadow-md text-center bg-white mx-2">
                  <img
                    src="/img/image 5.png"
                    alt="Book cover"
                    className="w-full h-auto"
                  />
                  <div className="py-4">
                    <p className="font-medium text-lg">{age} tuổi</p>
                    <button className="bg-indigo-900 text-white px-6 py-2 rounded-full mt-2 font-semibold">
                      GO!
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Infinite Scroll Section */}
      <section className="py-16">
        <InfiniteScroll />
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 justify-center">
          <div className="flex flex-col md:flex-row">
            <div className="justify-center md:w-1/2  ">
              <img
                src="../../../public/img/Frame 1.png"
                alt="Learning process"
                className="rounded-lg w-md items-center "
              />
            </div>
            <div className="flex flex-col text-left justify-end text-black font-bold md:w-1/2 mt-8 md:mt-0">
              {/* <h2 className="text-2xl font-bold mb-4">Trải nghiệm qua trình chơi thật phong phú</h2>
                            <h2 className="text-2xl font-bold mb-4">Trải nghiệm qua trình học thật thú vị</h2> */}
              <p className=" mb-4">
                Khi trẻ khám phá những thế giới mới và kết bạn với các sinh vật
                kỳ diệu, chúng học được nhiều cách khác nhau để giải quyết vấn
                đề.
              </p>
              <p className=" mb-4">
                Không có giới hạn thời gian hay áp lực phải tiến bộ nhanh, trò
                chơi của chúng tôi mang đến một không gian an toàn để trẻ tự do
                khám phá và học hỏi từ những sai lầm.
              </p>
              <p className=" mb-4">
                Dù là để luyện tập thêm hay thử thách thú vị, trò chơi của
                Rainbow-learn luôn mang lại kết quả học tập thực sự!
              </p>
              <p className="mb-4">
                Trẻ chơi Rainbow-learn hơn 4 lần mỗi tuần có mức độ cải thiện
                lên đến 75% chỉ trong 2 tháng đầu tiên. 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Icons Section */}

      <section className="py-16 bg-indigo-900 text-white relative">
        {/* top */}
        <div className="absolute top-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
              fill="white"
            />
          </svg>
        </div>
        {/* upper */}

        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Mỗi Ngày Một Điều mới
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "🎮", title: "Trò chơi" },
              { icon: "📚", title: "Câu chuyện" },
              { icon: "🎨", title: "Mỹ thuật" },
              { icon: "🧩", title: "Giải đố" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white text-indigo-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
              Trải nghiệm miễn phí
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "translateY(1px)" }}
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Cập nhật quá trình tiến bộ học toàn diện
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6">
              {[
                {
                  title: "Báo cáo hàng tuần",
                  desc: "Gửi thẳng đến hộp thư của bạn!",
                },
                {
                  title: "Tiến độ chi tiết",
                  desc: "Phân tích theo môn học, chủ đề, kỹ năng và hơn thế nữa.",
                },
                {
                  title: "Mục tiêu & nhắc nhở cá nhân hóa",
                  desc: "Giúp trẻ duy trì thói quen học tập hiệu quả.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-500 text-white p-2 rounded-md mr-4 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="../../../public/img/image 2.png"
                alt="Learning progress"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button className="bg-indigo-900 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-800 transition">
              Trải nghiệm miễn phí
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 text-black relative">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Thử ngay RAINBOW miễn phí!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 space-y-6">
              {[
                "Nhiều chủ đề học tập đa dạng",
                "Học quả thông minh và hiệu quả",
                "Hỗ trợ 24/7 từ đội ngũ chuyên gia",
              ].map((item, index) => (
                <div key={index} className="flex items-center ">
                  <div className="text-green-400 mr-4">
                    <Check size={24} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
              <div className="pt-6">
                <button className="bg-white text-indigo-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                  Bắt đầu học ngay
                </button>
              </div>
            </div>
            <div className="cold-span-1 space-y-6">
              <img
                src="../../../public/img/image 4.png"
                alt="Benefits"
                className="rounded-lg w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};
