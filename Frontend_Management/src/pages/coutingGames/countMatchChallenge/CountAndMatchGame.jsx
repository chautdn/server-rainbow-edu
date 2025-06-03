import React, { useState, useEffect } from "react";

// Initial objects with min/max count for randomization
const initialObjects = [
    { name: "Houses", minCount: 2, maxCount: 5, images: "🏠" },
    { name: "Shuttlecocks", minCount: 3, maxCount: 6, images: "🏸" },
    { name: "Cars", minCount: 4, maxCount: 7, images: "🚗" },
];

// List of numbers to match with the randomized object counts
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Fisher-Yates Shuffle function to randomize an array
const shuffleArray = (array) => {
    let newArray = [...array]; // Create a copy of the array to avoid mutating the original
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
};

// Function to randomize the number of images within a min/max range
const randomizeImageCount = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const CountAndMatchGame = () => {
    const [selectedMatches, setSelectedMatches] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [objects, setObjects] = useState([]);

    // Randomize objects and image count when the component mounts
    useEffect(() => {
        const shuffledObjects = shuffleArray(initialObjects).map((obj) => ({
            ...obj,
            count: randomizeImageCount(obj.minCount, obj.maxCount), // Randomize count
            images: Array(randomizeImageCount(obj.minCount, obj.maxCount)).fill(obj.images), // Fill images based on count
        }));
        setObjects(shuffledObjects); // Set the randomized objects into state
    }, []);

    // Function to handle matching logic
    const handleMatch = (objectName, number) => {
        setSelectedMatches((prev) => ({ ...prev, [objectName]: number }));
        setShowResults(false); // Reset results when a new match is made
    };

    // Function to check if the user's matches are correct
    const checkMatches = () => {
        setShowResults(true);
    };

    // Helper function to determine if a match is correct
    const isMatchCorrect = (objectName) => {
        const object = objects.find((obj) => obj.name === objectName);
        return selectedMatches[objectName] === object.count;
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-yellow-100 to-pink-200 p-8 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-purple-600 mb-10 animate-bounce">
                🎉 Count & Match Game 🎉
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-16 items-center justify-center">
                {/* Left column: objects */}
                <div className="flex flex-col gap-12 items-center border-4">
                    {objects.map((object, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="flex flex-wrap justify-center gap-2 ">
                                {object.images.map((item, imgIndex) => (
                                    <span key={imgIndex} className="text-5xl">{item}</span>
                                ))}
                            </div>
                            <p className="text-xl font-semibold text-blue-700 mb-4">
                                {object.name}
                            </p>
                            {showResults && (
                                <p className={`text-3xl font-bold ${isMatchCorrect(object.name) ? "text-green-600" : "text-red-600"}`}>
                                    {isMatchCorrect(object.name) ? "🎉 Correct!" : "❌ Try Again!"}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right column: numbers */}
                <div className="flex flex-col gap-12 items-center border-4">
                    {objects.map((object, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="flex justify-center gap-2">
                                {numbers.map((number) => (
                                    <button
                                        key={number}
                                        className={`text-xl p-2 font-bold rounded-full transition-transform transform hover:scale-110 duration-200 ease-in-out ${selectedMatches[object.name] === number ? "bg-green-400" : "bg-yellow-400"}`}
                                        onClick={() => handleMatch(object.name, number)}
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>
                            <p className="text-xl font-semibold text-yellow-700 mb-2">
                                How many {object.name}?
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Check Results Button */}
            <button
                onClick={checkMatches}
                className="mt-12 bg-purple-500 hover:bg-purple-600 text-white text-2xl px-10 py-4 rounded-xl font-bold transition-transform transform hover:scale-110 animate-bounce"
            >
                🏁 Check My Answers 🏁
            </button>

            {showResults && (
                <div className="mt-8 text-3xl text-center font-bold text-green-700">
                    {objects.every((object) => isMatchCorrect(object.name))
                        ? "🎉 You did it! All matches are correct!"
                        : "❌ Some answers were incorrect. Try again!"}
                </div>
            )}
        </div>
    );
};

export default CountAndMatchGame;
