"use client";

import Map from "react-map-gl/mapbox";
import { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapView() {
  return (
    <Map
      initialViewState={{
        longitude: 78.9629,
        latitude: 20.5937,
        zoom: 4,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      style={{ width: "100%", height: "100%" }}
    >
      <Marker longitude={77.1025} latitude={28.7041}>
        <div style={{ fontSize: 30 }}>⚠️</div>
      </Marker>
    </Map>
  );
}