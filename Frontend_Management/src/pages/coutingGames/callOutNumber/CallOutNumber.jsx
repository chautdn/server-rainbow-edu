import React, { useState } from 'react'
import SpeechUtils from '../../../utils/SpeechUtils';

const CallOutNumber = () => {
    const [count, setCount] = useState(0);
    const [showCelebration, setShowCelebration] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
        if (count + 1 === 10) {
            setShowCelebration(true);
            setTimeout(() => setShowCelebration(false), 3000);
        }
    };

    const resetGame = () => {
        setCount(0);
        setShowCelebration(false);
    };

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl font-bold text-purple-600 mb-6">🎉 Let's Count! 🎉</h1>

            <p className="text-xl text-pink-600 mb-4">Click the stars to count up to 10!</p>

            <div className="flex justify-center space-x-4 mb-6">
                {Array.from({ length: count }).map((_, i) => (
                    <div
                        key={i}
                        className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-2xl text-white font-bold"
                    >
                        ⭐
                    </div>
                ))}
            </div>

            <button
                onClick={handleClick}
                className="bg-green-400 text-white py-3 px-8 rounded-full text-2xl hover:bg-green-500 transition-all duration-300 ease-in-out"
            >
                Click to Add a Star!
            </button>

            {showCelebration && (
                <div className="mt-8 text-3xl font-bold text-blue-500 animate-bounce">
                    🎉 You counted to 10! 🎉
                </div>
            )}

            {count > 0 && (
                <button
                    onClick={resetGame}
                    className="mt-4 bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-500 transition duration-300"
                >
                    Reset
                </button>
            )}

            <div className="mt-8 bg-purple-200 text-purple-800 p-4 rounded-lg text-lg">
                <p>{count} Stars</p>

                {SpeechUtils.speak(`${count} Stars`)}
            </div>
        </div>
    );
};

export default CallOutNumber
