import LessonBlock from './LessonBlock';
import { useState } from 'react';

export default function CourseProgress() {
    // State to manage which lessons are expanded
    const [expandedLessons, setExpandedLessons] = useState({
        "ABCD": true,
        "EFG": true,
        "HIJK": false,
        "LMNO": false,
        "PQRS": false,
        "TUVW": false,
        "XYZ": false
    });

    // Toggle lesson expansion
    const toggleLesson = (lessonTitle) => {
        setExpandedLessons(prev => ({
            ...prev,
            [lessonTitle]: !prev[lessonTitle]
        }));
    };

    // Sample data based on the image
    const topics = [
        {
            id: 1,
            title: "Identify Uppercase Letters",
            totalSkills: 111,
            progress: 0,
            expanded: true,
            lessons: [
                {
                    title: "ABCD",
                    totalSkills: 17,
                    skills: 0,
                    items: [
                        { title: "Find the Letter", letter: "A", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "B", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "C", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "D", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Spiral", letter: "", totalSkills: 1, skills: 0, accuracy: 0 }
                    ]
                },
                {
                    title: "EFG",
                    totalSkills: 13,
                    skills: 0,
                    items: [
                        { title: "Find the Letter", letter: "E", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "F", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "G", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Wave Pattern", letter: "", totalSkills: 1, skills: 0, accuracy: 0 }
                    ]
                },
                {
                    title: "HIJK",
                    totalSkills: 17,
                    skills: 0,
                    items: [
                        { title: "Find the Letter", letter: "H", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "I", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "J", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "K", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Zigzag", letter: "", totalSkills: 1, skills: 0, accuracy: 0 }
                    ]
                },
                {
                    title: "LMNO",
                    totalSkills: 17,
                    skills: 0,
                    items: [
                        { title: "Find the Letter", letter: "L", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "M", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "N", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "O", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Circle", letter: "", totalSkills: 1, skills: 0, accuracy: 0 }
                    ]
                },
                {
                    title: "PQRS",
                    totalSkills: 17,
                    skills: 0,
                    items: [
                        { title: "Find the Letter", letter: "P", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "Q", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "R", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Find the Letter", letter: "S", totalSkills: 4, skills: 0, accuracy: 0 },
                        { title: "Diamond", letter: "", totalSkills: 1, skills: 0, accuracy: 0 }
                    ]
                },
                {
                    title: "TUVW",
                    totalSkills: 17,
                    skills: 0,
                    items: []
                },
                {
                    title: "XYZ",
                    totalSkills: 13,
                    skills: 0,
                    items: []
                }
            ]
        },
        {
            id: 2,
            title: "Trace Uppercase Letters",
            totalSkills: 36,
            progress: 0,
            expanded: false
        },
        {
            id: 3,
            title: "Identify Lowercase Letters",
            totalSkills: 118,
            progress: 0,
            expanded: false
        },
        {
            id: 4,
            title: "Trace Lowercase Letters",
            totalSkills: 36,
            progress: 0,
            expanded: false
        },
        {
            id: 5,
            title: "Alphabet Songs",
            totalSkills: 34,
            progress: 0,
            expanded: false
        },
        {
            id: 6,
            title: "Letter Sequence",
            totalSkills: 20,
            progress: 0,
            expanded: false
        },
        {
            id: 7,
            title: "Sight Words",
            totalSkills: 75,
            progress: 0,
            expanded: false
        },
        {
            id: 8,
            title: "Books and Readers",
            totalSkills: 75,
            progress: 0,
            expanded: false
        }
    ];

    return (
        <div className="flex h-screen">
            {/* Left sidebar menu */}
            <div className="w-64 pr-4 overflow-y-auto">
                {topics.map(topic => (
                    <div key={topic.id} className="mb-6">
                        <h3 className="font-semibold mb-2">{topic.title}</h3>
                        <div className="flex items-center gap-2 mb-1">
                            <div className="bg-blue-100 h-2 rounded-full flex-grow">
                                <div
                                    className="bg-blue-500 h-2 rounded-full"
                                    style={{ width: `${(topic.progress / topic.totalSkills) * 100}%` }}
                                ></div>
                            </div>
                            <span className="text-xs text-gray-500">{topic.progress}/{topic.totalSkills} skills</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main content with scroll */}
            <div className="flex-grow relative">
                <div className="bg-gray-100 rounded-md p-4 h-full overflow-y-auto">
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-1">{topics[0].title}</h2>
                        <p className="text-sm text-gray-500">{topics[0].progress}/{topics[0].totalSkills} skills</p>
                    </div>

                    <div className="pr-2"> {/* Add a small right padding for the scrollbar */}
                        {topics[0].lessons.map((lesson, i) => (
                            <div key={i} className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold">{lesson.title}</h3>
                                        <span className="text-xs text-purple-600">{lesson.skills}/{lesson.totalSkills} skills</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="bg-gray-200 text-gray-600 text-sm px-4 py-1 rounded-full">Yet to start</button>
                                        <button 
                                            className="text-purple-600 p-1 hover:bg-gray-200 rounded-full transition-colors"
                                            onClick={() => toggleLesson(lesson.title)}
                                            aria-label={expandedLessons[lesson.title] ? "Collapse section" : "Expand section"}
                                        >
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className={`h-5 w-5 transition-transform duration-300 ${expandedLessons[lesson.title] ? "rotate-180" : ""}`} 
                                                viewBox="0 0 20 20" 
                                                fill="currentColor"
                                            >
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {expandedLessons[lesson.title] && (
                                    <div className="mb-2">
                                        <div className="flex justify-between text-sm text-gray-500 px-4 mb-2">
                                            <span>Learning Objective</span>
                                            <div className="flex gap-16">
                                                <span>Accuracy</span>
                                                <span>Proficiency</span>
                                            </div>
                                        </div>

                                        <div>
                                            {lesson.items.map((item, j) => (
                                                <LessonBlock
                                                    key={j}
                                                    title={item.title}
                                                    letter={item.letter}
                                                    skills={item.skills}
                                                    totalSkills={item.totalSkills}
                                                    accuracy={item.accuracy}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}