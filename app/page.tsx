import Sidebar from "./components/sidebar";
import MapView from "./components/MapView";
import Alerts from "./components/alert";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-950 text-white">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">

        <div className="p-4 border-b border-gray-800 text-xl font-semibold">
          🌍 Disaster Monitoring Dashboard
        </div>

        <div className="flex flex-1">
          <div className="flex-1">
            <MapView />
          </div>

          <Alerts />
        </div>

      </div>
    </div>
  );
}