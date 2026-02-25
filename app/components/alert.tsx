export default function Alerts() {
  return (
    <div className="w-72 bg-gray-900 border-l border-gray-800 p-4">
      <h2 className="text-lg font-semibold mb-4">⚠ Active Alerts</h2>

      <div className="space-y-3">

        <div className="bg-red-900/40 border border-red-700 p-3 rounded">
          <div className="font-semibold">Landslide</div>
          <div className="text-sm text-gray-300">Uttarakhand region</div>
        </div>

        <div className="bg-orange-900/40 border border-orange-700 p-3 rounded">
          <div className="font-semibold">Flood Risk</div>
          <div className="text-sm text-gray-300">Assam area</div>
        </div>

      </div>
    </div>
  );
}