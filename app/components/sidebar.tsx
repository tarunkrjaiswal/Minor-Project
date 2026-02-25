export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-900 border-r border-gray-800 p-4">
      <h2 className="text-lg font-bold mb-6">🚨 Disaster AI</h2>

      <ul className="space-y-3 text-gray-300">
        <li className="hover:text-white cursor-pointer">Dashboard</li>
        <li className="hover:text-white cursor-pointer">Live Map</li>
        <li className="hover:text-white cursor-pointer">History</li>
        <li className="hover:text-white cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}