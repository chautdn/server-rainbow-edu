import React, { useState, useEffect } from "react";
import "./styles.css"
const ShapeCountChallenge = () => {
    const [shapes, setShapes] = useState([]);
    const [falling, setFalling] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [userGuess, setUserGuess] = useState("");
    const [gameStatus, setGameStatus] = useState("");

    const shapeOptions = ["circle", "square", "triangle"];

    // Function to start the game
    const startGame = () => {
        setFalling(true);
        setGameStatus("");
        let newShapes = generateShapes();
        setShapes(newShapes);
        setCorrectCount(newShapes.length);
    };

    // Function to generate random shapes
    const generateShapes = () => {
        const numShapes = Math.floor(Math.random() * 5) + 5; // between 5 and 9 shapes
        let generatedShapes = [];
        for (let i = 0; i < numShapes; i++) {
            let shape = shapeOptions[Math.floor(Math.random() * shapeOptions.length)];
            generatedShapes.push(shape);
        }
        return generatedShapes;
    };

    // Function to handle user input
    const handleInputChange = (e) => {
        setUserGuess(e.target.value);
    };

    // Function to check user's guess
    const checkAnswer = () => {
        if (parseInt(userGuess) === correctCount) {
            setGameStatus("Correct! 🎉 Well done.");
        } else {
            setGameStatus("Oops! Try again.");
        }
        setFalling(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
                Shape Count Challenge!
            </h1>

            <div className="relative h-64 w-full max-w-md bg-white border-2 border-blue-400 rounded-lg overflow-hidden mb-6">
                {shapes.map((shape, index) => (
                    <div
                        key={index}
                        className={`absolute animate-fall ${shape}`}
                        style={{
                            left: `${Math.random() * 80}%`,
                            animationDuration: `${Math.random() * 2 + 2}s`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="flex flex-col items-center">
                <button
                    onClick={startGame}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-700"
                >
                    Start Game
                </button>

                {falling && (
                    <div className="flex flex-col items-center">
                        <input
                            type="number"
                            value={userGuess}
                            onChange={handleInputChange}
                            className="px-4 py-2 border-2 border-blue-300 rounded-lg mb-4"
                            placeholder="How many shapes?"
                        />
                        <button
                            onClick={checkAnswer}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        >
                            Submit Answer
                        </button>
                    </div>
                )}
                {!falling && gameStatus && (
                    <p className="text-lg font-bold text-blue-700 mt-4">{gameStatus}</p>
                )}
            </div>
        </div>
    );
};

export default ShapeCountChallenge;
