export default function PlayerSelector() {
    return (
    <div className="flex items-center mb-4 gap-2">
      <div className="flex items-center gap-2">
        <img src="/img/frog.png" alt="Player Icon" className="w-6 h-6" />
        <span className="font-semibold">Player1</span>
      </div>
      <select className="border p-1 rounded text-sm">
        <option>Lớp 2 tuổi</option>
        <option>Lớp 3 tuổi</option>
      </select>
      <button className="bg-gray-200 text-sm px-3 py-1 rounded">Cài đặt</button>
      <button className="bg-gray-200 text-sm px-3 py-1 rounded">Trò chơi</button>
    </div>
  );
}
