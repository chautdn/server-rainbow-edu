import React, { useState } from "react";

const generateBingoCard = () => {
    const numbers = Array.from({ length: 75 }, (_, i) => i + 1); // Numbers 1-75
    const card = [];
    for (let i = 0; i < 5; i++) {
        card.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]);
    }
    return card;
};

const BingoGame = () => {
    const [bingoCard, setBingoCard] = useState(generateBingoCard());
    const [calledNumbers, setCalledNumbers] = useState([]);
    const [isBingo, setIsBingo] = useState(false);

    // Call a random number
    const callNumber = () => {
        if (calledNumbers.length < 75) {
            let randomNum;
            do {
                randomNum = Math.floor(Math.random() * 75) + 1;
            } while (calledNumbers.includes(randomNum));
            setCalledNumbers([...calledNumbers, randomNum]);
        }
    };

    // Mark number on bingo card
    const markNumber = (number) => {
        return calledNumbers.includes(number);
    };

    // Check for bingo
    const checkBingo = () => {
        const winningCombinations = [
            // Rows
            [bingoCard[0], bingoCard[1], bingoCard[2], bingoCard[3], bingoCard[4]],
            // Columns
            [bingoCard[0], bingoCard[5], bingoCard[10], bingoCard[15], bingoCard[20]],
            // Diagonal
            [bingoCard[0], bingoCard[6], bingoCard[12], bingoCard[18], bingoCard[24]],
            [bingoCard[4], bingoCard[8], bingoCard[12], bingoCard[16], bingoCard[20]],
        ];
        for (const combination of winningCombinations) {
            if (combination.every((num) => calledNumbers.includes(num))) {
                setIsBingo(true);
                break;
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-pink-200 p-4">
            <h1 className="text-5xl font-bold text-purple-600 mb-4 shadow-lg">🎉 Number Bingo! 🎉</h1>

            <div className="grid grid-cols-5 gap-4 mb-4">
                {bingoCard.map((number) => (
                    <div
                        key={number}
                        className={`flex items-center justify-center h-20 text-3xl border-4 rounded-lg cursor-pointer transition-all duration-300 
                        ${markNumber(number) ? "bg-green-400 text-white scale-110" : "bg-yellow-300 hover:bg-yellow-400"}`}
                        onClick={() => {
                            if (markNumber(number)) {
                                return; // Prevent marking if already marked
                            }
                            checkBingo();
                        }}
                    >
                        {number}
                    </div>
                ))}
            </div>

            <button
                onClick={callNumber}
                className="bg-blue-600 text-white text-2xl px-6 py-3 rounded-lg mb-4 hover:bg-blue-700 transition-all duration-300"
            >
                Call Number 🚀
            </button>

            <h2 className="text-2xl font-bold text-purple-600 mb-2">
                Called Numbers: {calledNumbers.join(", ") || "None yet!"}
            </h2>

            {isBingo && (
                <p className="text-3xl font-bold text-green-600 mt-4 animate-bounce">🎊 Bingo! You win! 🎊</p>
            )}
        </div>
    );
};

export default BingoGame;


