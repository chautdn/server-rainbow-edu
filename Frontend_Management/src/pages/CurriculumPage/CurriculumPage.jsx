import { useRef, useEffect, useState } from "react";
import CustomNavbar from '../../components/navbar/CustomNavbar';
import Tabs from '../../components/curriculum/Tabs';
import LearningPath from '../../components/curriculum/LearningPath';
import CategorySection from '../../components/curriculum/CategorySection';
import BackgroundStars from '../../components/BackgroundStars';

export const CurriculumPage = () => {
    const learningPathRef = useRef(null);
    const mathCategoryRef = useRef(null);
    const vietnameseCategoryRef = useRef(null);
    const [isCompact, setIsCompact] = useState(false);
    const [activeTab, setActiveTab] = useState("learning");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsCompact(true);
            } else {
                setIsCompact(false);
            }

            // Chỉ active tab khi section chiếm >= 80% viewport, nếu không thì active section có top gần top viewport
            const sections = [
                { key: "learning", ref: learningPathRef },
                { key: "math", ref: mathCategoryRef },
                { key: "vietnamese", ref: vietnameseCategoryRef },
            ];
            let found = null;
            let maxVisible = 0;
            let closestTop = null;
            let minTopDistance = Infinity;
            sections.forEach(section => {
                if (section.ref.current) {
                    const rect = section.ref.current.getBoundingClientRect();
                    const visibleTop = Math.max(rect.top, 0);
                    const visibleBottom = Math.min(rect.bottom, window.innerHeight);
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                    if (visibleHeight >= window.innerHeight * 0.8 && visibleHeight > maxVisible) {
                        found = section.key;
                        maxVisible = visibleHeight;
                    }
                    // Nếu không có section nào đủ 80%, lấy section có top gần top viewport nhất
                    if (rect.top >= 0 && rect.top < minTopDistance) {
                        minTopDistance = rect.top;
                        closestTop = section.key;
                    }
                }
            });
            if (found) setActiveTab(found);
            else if (closestTop) setActiveTab(closestTop);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const smoothScrollTo = (element) => {
        if (!element) return;

        // Lấy chiều cao thực tế của navbar và tabs
        const navbar = document.querySelector('.sticky.top-0');
        const navbarHeight = navbar ? navbar.offsetHeight : 100;

        const elementPosition = element.getBoundingClientRect().top;
        //const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;
        const duration = 1000;
        let start = null;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight + 20; // Thêm 20px padding
        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);

            const easeInOutCubic = progress => {
                return progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            };

            window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    const handleScrollTo = (section) => {
        if (section === "learning" && learningPathRef.current) {
            smoothScrollTo(learningPathRef.current);
        }
        if (section === "math" && mathCategoryRef.current) {
            smoothScrollTo(mathCategoryRef.current);
        }
        if (section === "vietnamese" && vietnameseCategoryRef.current) {
            smoothScrollTo(vietnameseCategoryRef.current);
        }
    };

    return (
        <div className="relative min-h-screen">
            <BackgroundStars />
            <main className="relative z-10">
                <div>
                    <div className="sticky top-0 z-50 bg-[#0a085f]">
                        <CustomNavbar isCompact={isCompact} />
                        <div className="w-full h-12 bg-black/30 rounded-b-2xl blur-sm"></div>
                        <Tabs onTabClick={handleScrollTo} activeTab={activeTab} />
                    </div>
                    <div className="p-6 max-w-7xl mx-auto " ref={learningPathRef}>
                        <LearningPath />
                    </div>

                    <div className="p-6 max-w-7xl mx-auto" ref={mathCategoryRef}>
                        <CategorySection title="Chương trình toán học" active={activeTab === "math"} />
                    </div>

                    <div className="p-6 max-w-7xl mx-auto" ref={vietnameseCategoryRef}>
                        <CategorySection title="Chương trình Tiếng Việt" active={activeTab === "vietnamese"} />
                    </div>
                </div>
            </main>
        </div>
    );
};
