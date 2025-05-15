import PropTypes from 'prop-types';

export default function LessonBlock({
    title = "Find the Letter",
    letter = "A",
    skills = 0,
    totalSkills = 4,
    accuracy = 0,
    isCompleted = false,
    isStarted = false
}) {
    return (
        <div className="mb-2 bg-white rounded-md">
            <div className="flex items-center gap-2 p-3">
                <div className="flex items-center justify-center">
                    <input
                        type="radio"
                        className={`w-4 h-4 ${isStarted ? "accent-purple-600" : "accent-gray-300"}`}
                        checked={isStarted}
                        readOnly
                    />
                </div>
                <div className="flex-grow">
                    <p className="font-medium text-sm">{title} {letter}</p>
                    <p className="text-xs text-gray-500">{skills}/{totalSkills} skills</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-500">
                        {accuracy}%
                    </span>
                    <div className={`w-3 h-3 rounded-full ${isCompleted ? "bg-purple-600" : "bg-gray-200"}`}></div>
                    <button className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200">
                        Preview
                    </button>
                </div>
            </div>
            {isStarted && (
                <div className="px-3 pb-3">
                    <div className="pl-6">
                        <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            <table className="w-full">
                                <thead className="sticky top-0 bg-white z-10">
                                    <tr className="text-xs text-gray-500">
                                        <th className="text-left font-normal">Learning Objective</th>
                                        <th className="text-center font-normal w-24">Accuracy</th>
                                        <th className="text-center font-normal w-24">Proficiency</th>
                                        <th className="w-20"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(totalSkills)].map((_, i) => (
                                        <tr key={i} className="text-sm">
                                            <td className="py-2">
                                                <div className="flex items-center gap-2">
                                                    <input type="radio" className="accent-gray-300" disabled />
                                                    <span>{title} {letter}</span>
                                                </div>
                                                <div className="pl-6 text-xs text-gray-500">0/{1} skills</div>
                                            </td>
                                            <td className="text-center">
                                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-xs bg-gray-100 text-gray-500">0%</span>
                                            </td>
                                            <td className="text-center">
                                                <div className="flex justify-center">
                                                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <button className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                                                    Preview
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

LessonBlock.propTypes = {
    title: PropTypes.string,
    letter: PropTypes.string,
    skills: PropTypes.number,
    totalSkills: PropTypes.number,
    accuracy: PropTypes.number,
    isCompleted: PropTypes.bool,
    isStarted: PropTypes.bool
};