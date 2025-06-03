import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SpeechUtils from "../../../utils/SpeechUtils";

// Function to generate random images based on fruit name and count
const generateRandomImages = (fruitName, count) => {
    const emojis = {
        Apple: "🍎",
        Banana: "🍌",
        Grape: "🍇",
        Orange: "🍊",
        Pineapple: "🍍",
        Strawberry: "🍓",
        Watermelon: "🍉",
        Lemon: "🍋",
        Cherry: "🍒",
        Peach: "🍑",
        Pear: "🍐",
        Mango: "🥭",
        Blueberry: "🫐",
        Kiwi: "🥝",
        Coconut: "🥥",
        Avocado: "🥑"
    };

    const selectedEmoji = emojis[fruitName] || "🍏";
    const randomCount = Math.max(1, Math.floor(Math.random() * count + 1)); // generate a random count
    return {
        images: Array.from({ length: randomCount }, () => selectedEmoji),
        actualCount: randomCount
    };
};

const fruitsData = [
    { name: "Apple", count: 10 },
    { name: "Banana", count: 10 },
    { name: "Grape", count: 10 },
    { name: "Orange", count: 10 },
    { name: "Pineapple", count: 10 },
    { name: "Strawberry", count: 10 },
    { name: "Watermelon", count: 10 },
];

const FruitsCountChallenge = () => {
    const [selectedCounts, setSelectedCounts] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [fruitsWithImages, setFruitsWithImages] = useState([]);

    // Function to reset the game
    const resetGame = () => {
        setSelectedCounts({});
        setShowResult(false);
        const updatedFruits = fruitsData.map(fruit => {
            const { images, actualCount } = generateRandomImages(fruit.name, fruit.count);
            return { ...fruit, images, actualCount };
        });
        setFruitsWithImages(updatedFruits);
    };

    useEffect(() => {
        resetGame();
    }, []);

    // Update selected count for a fruit
    const handleSelectCount = (fruitName, count) => {
        setSelectedCounts((prev) => ({ ...prev, [fruitName]: count }));
        SpeechUtils.speak(count);
        const audio = new Audio("https://www.soundjay.com/button/sounds/button-3.mp3");
        audio.play();
    };

    // Check results and show feedback
    const checkResults = () => {
        setShowResult(true);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-green-200 p-4">
            <h1 className="text-5xl font-bold text-orange-600 mb-4 animate-bounce">🍏Fruit Count 🍌</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
                {fruitsWithImages.map((fruit) => (
                    <div key={fruit.name} className="flex flex-col items-center border-4 border-pink-400 p-4 rounded-lg shadow-lg bg-white gap-2 h-[300px]"> {/* Fixed height */}
                        <div className="flex flex-wrap h-[100px] overflow-hidden">
                            {fruit.images.map((item, index) => (
                                <span key={index} className="text-4xl">{item}</span>
                            ))}
                        </div>
                        <h2 className="text-2xl font-semibold text-purple-600">Count {fruit.name}(s)</h2>
                        <div className="mt-2 flex flex-wrap justify-center">
                            {/* Render number selection starting from 1 */}
                            {Array.from({ length: fruit.count }, (_, index) => index + 1).map((index) => (
                                <button
                                    key={index}
                                    className={`m-1 px-3 py-2 border-2 rounded-lg text-lg font-bold 
                                        ${selectedCounts[fruit.name] === index
                                            ? "bg-blue-400 text-white border-blue-600"
                                            : "bg-yellow-300 hover:bg-yellow-400"}`}
                                    onClick={() => handleSelectCount(fruit.name, index)}
                                >
                                    {index}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex gap-2 items-center justify-center">
                <button
                    onClick={checkResults}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-xl font-bold transition-all duration-300"
                >
                    Check Results 🚀
                </button>
                <Link to={`/game-lessons/games/${2}`}>
                    <button
                        id="go-back"
                        className="bg-[#00bcd4] text-white px-4 py-2 text-lg rounded-lg cursor-pointer  hover:bg-[#01427a]"
                    >
                        Go Back
                    </button>
                </Link>
            </div>

            {showResult && (
                <div className="fixed inset-0 bg-blue-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg text-center animate-fade-in shadow-lg transform scale-105 transition-transform">
                        <p className="text-2xl text-[#01427a]">🎉 Your Result 🎉</p>
                        {fruitsWithImages.map((fruit) => (
                            <p key={fruit.name} className={`text-xl ${selectedCounts[fruit.name] === fruit.actualCount ? "text-green-600" : "text-red-600"}`}>
                                {fruit.name}: {selectedCounts[fruit.name] === fruit.actualCount ? "Correct! 🎉" : `Try Again! 👎 (Actual: ${fruit.actualCount})`}
                            </p>
                        ))}
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 text-lg rounded-lg cursor-pointer mt-5 transition-transform transform hover:scale-110"
                            onClick={resetGame}
                        >
                            Play Again 🚗💨
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FruitsCountChallenge;
