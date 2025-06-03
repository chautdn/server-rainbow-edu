import React from 'react';
import { gameLessons } from '../../utils/gameLessons';
import GameLessonCard from '../../components/GameLessonCard';
import ShapesAnimation from "../../components/sharedComponents/ShapesAnimation";
const GameLessons = () => {
    return (
        <div className="relative py-4 bg-gradient-to-r from-green-200 via-yellow-100 to-blue-200 min-h-screen overflow-hidden">
            <div className='max-w-7xl mx-auto'>
                {/* Fun Animated Title */}
                <h2 className="text-4xl font-bold text-center mb-8 text-purple-700 drop-shadow-lg animate-pulse bg-gradient-to-r from-green-200 via-yellow-100 to-blue-200 p-4">
                    Select Lesson 📚
                </h2>

                <ShapesAnimation />
                <span className="text-7xl orbiting-icon2">
                    🚀
                </span>
                {/* Game Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 min-w-28 min-h-28">
                    {gameLessons.map((game) => (
                        <div key={game.gameLessonId} className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
                            <div>
                                <img src={game.imgUrl} alt="image loading..." />
                            </div>
                            <div className="absolute z-[-4] top-0 right-0 w-24 h-24 bg-red-200 rounded-full opacity-50 animate-ping"></div>
                            <div className="absolute z-[-4] bottom-0 left-0 w-20 h-20 bg-yellow-200 rounded-full opacity-50 animate-spin"></div>
                            {/* 
                            <GameLessonCard title={game.title} description={game.description} link={game.link}
                                gameLessonId={game.gameLessonId} gamesCount={game.gamesCount} /> */}
                            <GameLessonCard game={game} />
                            <div className="absolute z-[-4] bottom-0 left-0 w-24 h-24 bg-red-200 rounded-full opacity-50 animate-ping"></div>
                            <div className="absolute z-[-4] bottom-0 left-0 w-20 h-20 bg-yellow-200 rounded-full opacity-50 animate-spin"></div>

                        </div>
                    ))}
                </div>

                {/* Add Kid-Friendly Animated Shapes */}
                <div className="absolute z-[-4] top-0 left-0 w-32 h-32 bg-pink-300 rounded-full opacity-50 animate-bounce"></div>
                <div className="absolute z-[-4] bottom-20 right-10 w-28 h-28 bg-orange-300 rounded-full opacity-75 animate-ping"></div>
            </div>
        </div>
    );
};

export default GameLessons;
