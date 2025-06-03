export default function WeeklySummary() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 h-64">
            <h2 className="font-semibold text-lg mb-3">Tổng Kết Tuần</h2>
            <p className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet consectetur adipiscing...</p>
            <div className="flex justify-around mt-6 h-full items-center">
                {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="text-center">
                        <div className="w-12 h-12 border-2 border-gray-500 rounded-full mx-auto mb-2" />
                        <p className="text-xs">Tuần {i + 1}<br /><span className="text-gray-400">thu nhập: 1</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
