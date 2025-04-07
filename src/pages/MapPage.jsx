import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fixing leaflet marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// 📍 Pune center location
const puneCenter = [18.5204, 73.8567];

// 🧩 Other disposal points in Pune
const disposalCenters = [
  { lat: 18.5167, lng: 73.8569, name: "Kothrud Recycling Point" },
  { lat: 18.5105, lng: 73.8320, name: "Warje Disposal Unit" },
  { lat: 18.5390, lng: 73.8920, name: "Koregaon Park E-Waste Hub" },
  { lat: 18.5010, lng: 73.8745, name: "Camp Area Drop-off" },
];

const MapPage = () => {
  return (
    <div className="relative w-full h-screen p-2 md:p-4">
      
      {/* 🔰 Floating title above map */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-green-900 font-semibold px-4 py-2 rounded-lg shadow-md z-[1000] text-center text-sm md:text-base">
        📍 Disposal Centers in Pune
      </div>

      <div className="w-full h-full rounded-2xl overflow-hidden shadow-md">
        <MapContainer
          center={puneCenter}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* 🔴 Circle at Pune Main Center */}
          <Circle
            center={puneCenter}
            radius={500}
            pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.4 }}
          >
            <Popup>Pune Main Collection Center</Popup>
          </Circle>

          {/* 🔴 Circles + Markers for all other disposal centers */}
          {disposalCenters.map((center, index) => (
            <React.Fragment key={index}>
              <Circle
                center={[center.lat, center.lng]}
                radius={400}
                pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.4 }}
              />
              <Marker position={[center.lat, center.lng]}>
                <Popup>{center.name}</Popup>
              </Marker>
            </React.Fragment>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;
